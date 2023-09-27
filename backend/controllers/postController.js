import cloudinary from "../config/cloudnary.js";
import Comment from "../models/Comment.js";
import Like from "../models/Like.js";
import Post from "../models/Post.js";


export const createPost = async (req, res) => {
    try {


        let result;

        if (req.file) {


            let encodedImage = `data:image/jpg;base64,${req.file.buffer.toString('base64')}`;

            // Cloudinary:: Uploader.upload("sample.jpg", : use_filename => true, : folder => "folder1/folder2");


            result = await cloudinary.uploader.upload(encodedImage, {
                resource_type: 'image',
                transformation: [
                    { width: 500, height: 500, crop: "limit" }
                ],
                encoding: 'base64',
                folder: "posts"
            });

        }

        const post = new Post({
            content: req.body.content,
            image: result?.url || null,
            author: req.user._id
        });

        await post.save();

        return res.status(201).send(post);
    } catch (error) {
        console.log("error creating post", error);
        res.status(400).send(error.message);
    }
};
export const updatePost = async (req, res) => {
    try {

        let updatedFelids = {
            content: req.body.content
        };

        let result;


        const isExists = await Post.findById(req.params.id);

        if (!isExists) return res.status(400).send("post not found");


        if (req.file) {


            let encodedImage = `data:image/jpg;base64,${req.file.buffer.toString('base64')}`;

            // Cloudinary:: Uploader.upload("sample.jpg", : use_filename => true, : folder => "folder1/folder2");


            result = await cloudinary.uploader.upload(encodedImage, {
                resource_type: 'image',
                transformation: [
                    { width: 500, height: 500, crop: "limit" }
                ],
                encoding: 'base64',
                folder: "posts"
            });

            updatedFelids.image = result.url;

        }

        const post = await Post.findByIdAndUpdate(req.params.id, updatedFelids, { new: true });

        return res.status(200).send(post);

    } catch (error) {
        console.log("error creating post", error);
        res.status(400).send(error.message);
    }
};

export const getAllPosts = async (req, res) => {

    try {
        const posts = await Post.find().
            populate({
                path: "likes",
                model: "Like",
                populate: {
                    path: "user",
                    model: "User",
                    select: "username"
                }
            }).populate({
                path: "author",
                model: "User",
                select: "username email"
            }).populate({
                path: "comments",
                model: "Comment",
                select: "content",
                populate: {
                    path: "user",
                    model: "User",
                    select: "username"
                }
            }).sort({ createdAt: -1 });
        return res.status(200).send(posts);
    } catch (error) {
        console.log("error getting posts", error);
        return res.status(400).send(error.message);
    }
};

export const getPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate({
                path: 'comments',
                model: 'Comment',
                populate: {
                    path: 'author',
                    model: 'User'
                }
            })
            .populate({
                path: 'likes',
                model: 'Like',
                populate: {
                    path: 'user',
                    model: 'User'
                }
            });

        if (!post) return next(new Error('Post not found'));
        // res.clearCookie('token');
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

export const LikePost = async (req, res) => {

    try {

        // find the post

        const post = await Post.findById(req.params.id);

        if (!post) return res.status(400).send("Post Not Found");


        const existingLike = await Like.findOne({ post: post._id, user: req.user._id });

        if (existingLike) {
            await Like.findByIdAndRemove(existingLike._id);
            // remove the like from the post
            post.likes.pull(existingLike._id);
            await post.save();
            return res.status(200).send("post unLiked successfully");
        }


        const like = new Like({
            post: post._id,
            user: req.user._id
        });

        await like.save();

        // relationship bw post and likes
        post.likes.push(like._id);

        await post.save();

        return res.status(201).send("Posts liked successfully");

    } catch (error) {
        console.log("error liking post", error);
        return res.status(400).send(error.message);
    }


};

export const commentOnPost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if (!post) return res.status(400).send("Post Not Found");


        const comment = new Comment({
            content: req.body.content,
            user: req.user._id,
            post: post._id
        });

        await comment.save();

        // relationship

        post.comments.push(comment._id);

        await post.save();

        return res.status(200).send("Comment Created");

    } catch (error) {
        console.log("error on commenting posts", error);
        return res.status(400).send(error.message);
    }
};

export const deletePost = async (req, res) => {

    try {

        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(400).send("Post Not Found");

        return res.status(200).send("Post deleted successfully");

    } catch (error) {
        console.log("error on deleting post", error);
        return res.status(400).send(error.message);
    }


};


