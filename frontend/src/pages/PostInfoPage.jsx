import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostInfoQuery } from '../features/api/postApiSlice';

const PostInfoPage = () => {

    const { id } = useParams();

    const { data, isLoading, error } = useGetPostInfoQuery(id);

    if (error) return <h2>{error?.data?.message}</h2>;

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <h1>{data?.content}</h1>
            <img src={data?.image} alt="" width={200} height={400} />
        </div>
    );
};

export default PostInfoPage;