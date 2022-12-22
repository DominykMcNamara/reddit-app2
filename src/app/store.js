import { configureStore } from "@reduxjs/toolkit/";
import { redditApi } from "./redditApi";
import  postReducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    [redditApi.reducerPath]: redditApi.reducer,
    posts: postReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redditApi.middleware),
});
