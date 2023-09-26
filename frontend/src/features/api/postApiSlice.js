import { apiSlice } from "./baseApiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: "/posts/get-posts"
            })
        }),

        getPostInfo: builder.query({
            query: (postId) => ({
                url: `/posts/get-post/${postId}`
            })
        })

    })
});


export const { useGetPostsQuery, useGetPostInfoQuery } = postApiSlice;