import nodemailer from 'nodemailer';
import { APP_PASSWORD } from '../../config/config.js';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "isoorapp@gmail.com",
        pass: APP_PASSWORD
    }
});

const sendVerificationEmail = (to, verificationLink) => {

    const mailOptions = {
        from: "dugsiiyeonline@gmail.com",
        to,
        subject: "Verification Email",
        html: `click the link below to verify your email ${verificationLink}`
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("error sending verification", error);
            return "failed to send verification";
        } else {
            console.log("successfully sending verification");
            return "successfully sent verification";
        }
    });

};

export default sendVerificationEmail;