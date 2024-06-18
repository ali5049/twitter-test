import {createSlice} from '@reduxjs/toolkit';
import {getPostsAction, refreshPostsAction} from '../actions/postsActions';

const initialState = {
  // Initial state goes here
  posts: [],
  loadingPosts: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,

  extraReducers: builder => {
    builder.addCase(getPostsAction.pending, (state, action) => {
      state.loadingPosts = true;
    });
    builder.addCase(getPostsAction.fulfilled, (state, action) => {
      state.posts = [...state.posts, ...action.payload?.data];
      state.loadingPosts = false;
    });
    builder.addCase(getPostsAction.rejected, (state, action) => {
      state.loadingPosts = false;
    });
    builder.addCase(refreshPostsAction.pending, (state, action) => {
      state.loadingPosts = true;
    });
    builder.addCase(refreshPostsAction.fulfilled, (state, action) => {
      state.posts = action.payload?.data;
      state.loadingPosts = false;
    });
    builder.addCase(refreshPostsAction.rejected, (state, action) => {
      state.loadingPosts = false;
    });
  },
});

export default postsSlice.reducer;
