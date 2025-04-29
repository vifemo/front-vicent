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
      const maxId = state.posts.length
        ? Math.max(...state.posts.map((p) => p.id || 0))
        : 0
      const postWithId = { ...action.payload, id: maxId + 1 }
      return { posts: [...state.posts, postWithId] }
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
