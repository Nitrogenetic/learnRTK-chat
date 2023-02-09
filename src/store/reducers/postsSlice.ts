import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "../../types/post";
import { fetchPosts } from "../actionCreators/posts";

export interface PostsState {
  posts?: PostType[];
  error: string;
  isLoading: boolean;
}

const initialState: PostsState = {
  error: "",
  isLoading: true,
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.posts = [];
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<PostType[]>) => {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
  },
});

export default postsSlice.reducer;
