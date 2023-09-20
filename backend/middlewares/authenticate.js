import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/config.js";

export const authenticate = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) return res.status(403).send({ status: false, message: "access denied, no Token Provided please login first" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        console.log("jwt verification error", err);
        return res.status(403).send({ status: false, message: "access denied, no Token Provided please login first" });
    }

};