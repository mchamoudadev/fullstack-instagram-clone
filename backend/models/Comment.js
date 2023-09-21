import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({

    content: {
        type: String,
        required: true,
        // validate: [value => value.length <= 10, 'content should be at least 10 characters']
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, {
    timestamps: true,
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;