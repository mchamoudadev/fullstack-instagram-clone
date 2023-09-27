import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useAddCommentMutation } from '../../features/api/postApiSlice';


const AddComment = ({ post }) => {

    const [comment, setComment] = useState("");
    const { userInfo } = useSelector((state) => state.auth);

    const [addComment] = useAddCommentMutation();

    const handleAddComment = async (comment) => {

        try {

            setComment("");
            await addComment({ postId: post._id, content: comment });

        } catch (err) {
            console.log("error adding comment", err);
        }

    };

    return (
        <div className="p-4 border-t border-gray-300">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleAddComment(comment);
            }}>
                <input
                    disabled={!userInfo}
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full text-sm text-gray-800 pl-4 py-2 rounded-full border border-gray-400 focus:outline-none focus:border-red-500 placeholder-gray-500"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />  </form>
        </div>
    );
};

export default AddComment;