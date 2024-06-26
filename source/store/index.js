// store.js
import {configureStore} from '@reduxjs/toolkit';

import postsReducer from './reducers/postsReducer';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
