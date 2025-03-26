import { Dispatch } from 'redux'
import {
  createPost,
  getPosts,
  updatePost,
  deletePost as deletedPost,
} from '../services/postService'
import { Post } from '../types/types'

export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POSTS = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const posts = await getPosts()
      dispatch({ type: FETCH_POSTS, payload: posts })
    } catch (error) {
      console.log('error fetching', error)
    }
  }
}

export const addPos = (post: Post) => {
  return async (dispatch: Dispatch) => {
    try {
      const newPost = await createPost(post)
      dispatch({ type: ADD_POSTS, payload: newPost })
    } catch (error) {
      console.log('error adding post', error)
    }
  }
}
export const editPost = (id: number, updatedPost: Post) => {
  return async (dispatch: Dispatch) => {
    try {
      const editedPost = await updatePost(id, updatedPost)
      dispatch({ type: EDIT_POST, payload: editedPost })
    } catch (error) {
      console.log('error updating post', error)
    }
  }
}

export const deletePost = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      await deletedPost(id)
      dispatch({ type: DELETE_POST, payload: id })
    } catch (error) {
      console.log('error deleting post', error)
    }
  }
}
