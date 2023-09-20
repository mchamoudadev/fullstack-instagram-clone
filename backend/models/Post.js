import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({

    content: {
        type: String,
        required: true,
        // validate: [value => value.length <= 10, 'content should be at least 10 characters']
    },
    image: {
        type: String,
        default: null
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Like"
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]

}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

export default Post;