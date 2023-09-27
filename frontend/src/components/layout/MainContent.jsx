import React from 'react';
import Stories from '../Stories';
import PostContainer from '../post/PostContainer';
import { useGetPostsQuery } from '../../features/api/postApiSlice';
import PostSkeleton from '../post/PostSkeleton';

const MainContent = () => {

    const { data, isLoading } = useGetPostsQuery();

    return (
        <div className="bg-gray-100 w-full p-4 overflow-y-auto">

            <Stories />

            {isLoading
                ? <PostSkeleton /> :

                (
                    data.length > 0 && data.map(post => (
                        <PostContainer key={post._id} post={post} />
                    ))

                )}
        </div>
    );
};

export default MainContent;