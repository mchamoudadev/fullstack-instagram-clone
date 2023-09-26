import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/baseApiSlice';

import authSliceReducer from './features/appSlices/authSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});


export default store;