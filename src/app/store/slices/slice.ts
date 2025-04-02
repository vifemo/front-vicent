import { createSlice } from '@reduxjs/toolkit'
import { Post } from '../../types/types'

interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: [],
}

const postSlice = createSlice({
  name: 'postReducer',
  initialState,
  reducers: {
    fetchAllPosts(state, action) {
      return { posts: action.payload }
    },
    addPost(state, action) {
      return { posts: [...state.posts, action.payload] }
    },
    editPost(state, action) {
      return {
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload.updatedPost : post
        ),
      }
    },
    deletePost(state, action) {
      return { posts: state.posts.filter((post) => post.id !== action.payload) }
    },
  },
})

export const { fetchAllPosts, addPost, deletePost, editPost } =
  postSlice.actions

export default postSlice.reducer
