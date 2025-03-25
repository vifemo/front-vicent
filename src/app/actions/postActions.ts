import { Dispatch } from 'redux'
import { API_URL, getPosts } from '../services/postService'

export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POSTS = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const fecthPosts = () => {
  type: 'ADD_POSTS'
}
