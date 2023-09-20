import dotenv from 'dotenv';


dotenv.config();

export const port = process.env.PORT;
export const dbURL = process.env.DATA_BASE_URL;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const WEB_URL = process.env.WEB_URL;
export const APP_PASSWORD = process.env.APP_PASSWORD;
export const CLOUDNARY_API_SECRET = process.env.CLOUDNARY_API_SECRET;
export const CLOUDNARY_API_KEY = process.env.CLOUDNARY_API_KEY;
export const CLOUDNARY_CLOUD_NAME = process.env.CLOUDNARY_CLOUD_NAME;