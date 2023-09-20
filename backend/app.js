import express from 'express';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';


const app = express();
const PORT = 8000;
app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);


connectDB();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));