import cloudinary from "../config/cloudnary.js";
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

