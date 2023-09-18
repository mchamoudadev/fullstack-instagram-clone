import mongoose, { connect } from 'mongoose';


import { dbURL } from './config.js';
import chalk from 'chalk';

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(dbURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log("mongoose connect successfully 🔥 ✅", chalk.green.bold(conn.connection.host));


    } catch (err) {
        console.log("error connecting to database", err);
        process.exit(1);
    }
};


export default connectDB;