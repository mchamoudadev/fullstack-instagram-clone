import React from 'react';
import UserProfile from './UserProfile';
import ImageContainer from './ImageContainer';
import ActionBar from './ActionBar';
import CommentSection from './CommentSection';
import AddComment from './AddComment';

const PostContainer = ({ post }) => {
    return (
        <div>

            <UserProfile author={post.author} />

            <ImageContainer image={post.image} />

            <ActionBar post={post} />

            <CommentSection comments={post.comments} />

            <AddComment post={post} />
        </div>
    );
};

export default PostContainer;