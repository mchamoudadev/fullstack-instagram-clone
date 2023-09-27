import { apiSlice } from "./baseApiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: "/posts/get-posts"
            }),
            providesTags: ['Post']
        }),
        getPostInfo: builder.query({
            query: (postId) => ({
                url: `/posts/get-post/${postId}`
            })
        }),
        likePost: builder.mutation({
            query: (postId) => ({
                url: `/posts/like-post/${postId}`,
                method: 'POST'
            }),
            invalidatesTags: ["Post"]
        }),
        addComment: builder.mutation({
            query: ({ postId, content }) => {

                console.log(postId, content);

                return {
                    url: `/posts/comment-post/${postId}`,
                    method: 'POST',
                    body: { content }
                };
            },
            invalidatesTags: ["Post"]
        }),

        addPost: builder.mutation({

            query: (newPost) => {

                const formData = new FormData();
                formData.append('content', newPost.content);
                formData.append('image', newPost.image);

                console.log("newPost", newPost);
                return {
                    url: "/posts/create-post",
                    method: 'POST',
                    body: formData
                };

            },
            invalidatesTags: ["Post"]
        })

    })
});


export const { useGetPostsQuery, useGetPostInfoQuery, useLikePostMutation, useAddCommentMutation, useAddPostMutation } = postApiSlice;