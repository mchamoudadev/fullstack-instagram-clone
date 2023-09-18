import { WEB_URL } from "../config/config.js";
import User from "../models/User.js";
import sendVerificationEmail from "../util/emails/sendVerificationToken.js";
import { generateVerificationToken } from "../util/generations.js";

export const registerUser = async (req, res, next) => {

    try {



        const { username, password, email } = req.body;

        const isUserExists = await User.findOne({
            $or: [
                { email: email.toLowerCase() },
                { username: username.toLowerCase() }
            ]
        });


        if (isUserExists) {

            if (isUserExists.email === email.toLowerCase()) {
                return res.status(400).send("email already exists");
            }
            if (isUserExists.username === username.toLowerCase()) {
                return res.status(400).send("username already exists");
            }
        }

        const verificationToken = generateVerificationToken();

        const tokeExpireDate = new Date();

        tokeExpireDate.setMinutes(tokeExpireDate.getMinutes() + 15);


        const userInfo = new User({
            username,
            email,
            password,
            token: verificationToken,
            expireDate: tokeExpireDate
        });

        await userInfo.save();

        userInfo.password = undefined;

        const verificationLink = `${WEB_URL}/users/verify?token=${verificationToken}`;

        sendVerificationEmail(email, verificationLink);

        res.status(201).send(userInfo);

    } catch (err) {
        console.log("error at user registerUser", err);
        res.status(400).send(err.message);
    }

};