import React, { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../features/api/postApiSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {

    const { data: posts, isLoading, isError, error } = useGetPostsQuery();

    if (isError) return <h2>{error?.data?.message}</h2>;

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>{
            posts.length > 0 && (
                posts.map(post => (
                    <div>
                        <Link to={`/post/${post._id}`}>
                            {post.content}
                        </Link>
                    </div>
                ))
            )
        }</div>
    );
};

export default HomePage;