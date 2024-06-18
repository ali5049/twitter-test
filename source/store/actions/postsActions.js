import {createAsyncThunk} from '@reduxjs/toolkit';

import axiosInstance from '../../services/axiosInterceptor';

export const getPostsAction = createAsyncThunk(
  'post/getPosts',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axiosInstance({
        method: 'GET',
        url: `/timeline?page=${payload.page}`,
      });

      if (response?.status === 200) {
        return response?.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const refreshPostsAction = createAsyncThunk(
  'post/refreshPosts',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axiosInstance({
        method: 'GET',
        url: `/timeline?page=${1}`,
      });

      if (response?.status === 200) {
        return response?.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const likePostAction = createAsyncThunk(
  'post/like',
  async (payload, {rejectWithValue}) => {
    console.log('responseedsfdf', payload);
    try {
      const response = await axiosInstance({
        method: 'POST',
        url: '/like',
        data: payload,
      });

      console.log('responseedfdsdafv', response);

      if (response?.status === 200) {
        return response?.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const unlikePostAction = createAsyncThunk(
  'post/unlike',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axiosInstance({
        method: 'POST',
        url: '/unlike',
        data: payload,
      });

      if (response?.status === 200) {
        return response?.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
