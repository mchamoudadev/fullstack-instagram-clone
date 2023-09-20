import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY, WEB_URL } from "../config/config.js";
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

        tokeExpireDate.setHours(tokeExpireDate.getHours() + 24);

        console.log("tokeExpireDate", tokeExpireDate);

        const userInfo = new User({
            username,
            email,
            password,
            token: verificationToken,
            expireDate: tokeExpireDate
        });

        await userInfo.save();

        userInfo.password = undefined;

        const verificationLink = `${WEB_URL}/users/verify-user?token=${verificationToken}&userId=${userInfo._id}`;

        sendVerificationEmail(email, verificationLink);

        res.status(201).send(userInfo);

    } catch (err) {
        console.log("error at user registerUser", err);
        res.status(400).send(err.message);
    }

};

export const verifyUser = async (req, res) => {

    try {

        const { token, userId: _id } = req.query;
        // const _id = req.query.userId;
        // const token = req.query.token;

        const user = await User.findOne({ _id, token });

        if (!user) {
            return res.status(400).send("Invalid Token...");
        }

        const expirationTime = user.expireDate;

        if (!expirationTime || expirationTime < new Date()) {
            return res.status(400).send("Token has expired");
        }

        // 18:30 PM 

        // 19:35 PM - 24 hours = 5 hours


        // check the actual expiration date

        const maxAge = new Date();

        maxAge.setHours(maxAge.getHours() - 24);

        if (expirationTime < maxAge) {
            return res.status(400).send("Token has expired");
        }

        user.isEmailConfirmed = true;
        user.token = undefined;

        user.expireDate = undefined;

        await user.save();

        res.status(200).send({ status: true, message: "Token has been verified." });

    } catch (err) {
        console.log("error at user verification", err);
        res.status(400).send(err.message);
    }

};

export const loginUser = async (req, res) => {

    try {

        const { username, email, password } = req.body;


        const isUserExists = await User.findOne({
            $or: [
                { email: email?.toLowerCase() },
                { username: username?.toLowerCase() }
            ]
        }).select("+password");


        if (!isUserExists.isEmailConfirmed) {
            return res.status(401).send("Confirm your email first");
        }

        if (!isUserExists) {
            return res.status(400).send("Invalid username or password");
        }

        const validPassword = await isUserExists.comparePassword(password);


        if (!validPassword) {
            return res.status(400).send("Invalid username or password");
        }

        const token = jwt.sign({ _id: isUserExists._id }, JWT_SECRET_KEY);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        isUserExists.password = undefined;

        res.status(200).send(isUserExists);

    } catch (err) {
        console.log("first login failed", err);
        res.status(400).send(err.message);
    }

}


