import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: '/api/v1'
});

export const apiSlice = createApi({
    baseQuery,
    endpoints: (builder) => ({})
});