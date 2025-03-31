import { Post } from '../types/types'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'
export const ADD_POSTS = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const fetchAllPosts = (posts: Post[]) => {
  return { type: FETCH_ALL_POSTS, payload: posts }
}

export const addPost = (post: Post) => {
  return { type: ADD_POSTS, payload: post }
}
export const editPost = (id: number, updatedPost: Post) => {
  return { type: EDIT_POST, payload: { id, updatedPost } }
}

export const deletePost = (id: number) => {
  return { type: DELETE_POST, payload: id }
}
