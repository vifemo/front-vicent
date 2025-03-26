import {
  ADD_POSTS,
  DELETE_POST,
  EDIT_POST,
  FETCH_POSTS,
} from '../actions/postActions'
import { Post } from '../types/types'

interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: [],
}

function postReducer(
  state = initialState,
  action: { type: string; payload: any }
): PostsState {
  switch (action.type) {
    case FETCH_POSTS:
      return { posts: action.payload }
    case ADD_POSTS:
      return { posts: [...state.posts, action.payload] }
    case EDIT_POST:
      return {
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      }
    case DELETE_POST:
      return { posts: state.posts.filter((post) => post.id !== action.payload) }

    default:
      return state
  }
}

export default postReducer
