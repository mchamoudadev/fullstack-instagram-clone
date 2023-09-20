import express from "express";
import { authenticate } from "../middlewares/authenticate.js";
import upload from "../middlewares/multer.js";
import { createPost, updatePost } from "../controllers/postController.js";


const postRouter = express.Router();


postRouter.post('/create-post', authenticate, upload.single('image'), createPost);
postRouter.post('/update-post/:id', authenticate, upload.single('image'), updatePost);

export default postRouter;
