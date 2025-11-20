import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    return res.json();
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
    showForm: false,
    displayCount: 12,
  },
  reducers: {
    toggleForm: (state) => {
      state.showForm = !state.showForm;
    },
    loadMore: (state) => {
      state.displayCount += 12;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      });
  },
});

export const { loadMore } = postsSlice.actions;
export const { toggleForm } = postsSlice.actions;
export default postsSlice.reducer;
