import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPostsStart: (state) => {
      state.loading = true;
    },
    fetchPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchPostsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart());
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.toString()));
  }
};

export default postsSlice.reducer;
