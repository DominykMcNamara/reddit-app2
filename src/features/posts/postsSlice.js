import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    currentPosts: "popular",
  },
  reducers: {
    getNewPosts: (state, action) => {
      state.currentPosts = action.payload;
    },
  },
});

export const selectCurrentPosts = (state) => state.posts.currentPosts;

export const { getNewPosts } = postsSlice.actions;

export default postsSlice.reducer;
