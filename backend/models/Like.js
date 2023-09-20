import mongoose from "mongoose";

const { Schema } = mongoose;

const likeSchema = new Schema({

    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {
    timestamps: true,
});

const Like = mongoose.model('Like', likeSchema);

export default Like;