import dotenv from 'dotenv';


dotenv.config();

export const port = process.env.PORT;
export const dbURL = process.env.DATA_BASE_URL;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const WEB_URL = process.env.WEB_URL;
export const APP_PASSWORD = process.env.APP_PASSWROD;