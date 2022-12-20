/* import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
async (action, thunkAPI) => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const json = await response.json()
    return json
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
    posts: [],
    isLoading: false,
    isErr: false,
    },
   
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.isLoading = true
            state.isErr = false
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.posts = action.payload
            state.isErr = false
        },
        [fetchPosts.rejected]: (state, action) => {
            state.isLoading = false
            state.isErr = true
        }
    }
})

export const selectPosts = (state) => state.posts.posts
export const selectIsLoading = (state) => state.posts.isLoading
export const selectIsErr = (state) => state.posts.isErr

export default postsSlice.reducer

*/