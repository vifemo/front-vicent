import { FETCH_POSTS } from '../actions/postActions'
import { Post } from '../types/types'

interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: [],
}

function postReducer(
  state = initialState,
  action: { type: string; payload: Post }
) {
  if (action.type === FETCH_POSTS) {
    return { posts: action.payload }
  }

  return state
}

export default postReducer
