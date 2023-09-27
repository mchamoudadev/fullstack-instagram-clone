import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLikePostMutation } from '../../features/api/postApiSlice';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const ActionBar = ({ post }) => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);
    const hasUserLiked = post?.likes.some(like => like.user._id.toString() === userInfo._id);
    const likeLength = post?.likes.length || 0;

    const [optimisticLikeCount, setOptimisticLikeCount] = useState(likeLength);
    const [optimisticLiked, setOptimisticLiked] = useState(hasUserLiked);


    const [like] = useLikePostMutation();



    const likeText = optimisticLikeCount > 0 ? optimisticLikeCount === 1 ? '1 Like' : `${optimisticLikeCount} likes` : "";


    const handleLikeButton = () => {
        if (!userInfo) {
            return console.log("login first");
        }

        handleLike();

    };

    const handleLike = () => {

        setOptimisticLiked(!optimisticLiked);
        setOptimisticLikeCount(optimisticLiked ? optimisticLikeCount - 1 : optimisticLikeCount + 1);
        dispatch(like(post._id))
            .unwrap()
            .then((payload) => {
                console.log("success");
            }).catch((err) => {
                setOptimisticLiked(hasUserLiked);
                setOptimisticLikeCount(likeCount);
            });
    };

    return (
        <div className="action-bar p-2 flex items-center">
            <button onClick={handleLikeButton}>
                {optimisticLiked ? <AiFillHeart size={24} className="text-red-500" /> :
                    <AiOutlineHeart size={24} className="text-gray-500" />
                }
            </button>
            <span className="text-sm text-gray-700">{likeText}</span>
        </div>
    );
};

export default ActionBar;