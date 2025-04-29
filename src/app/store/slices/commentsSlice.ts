import { Comment } from '../../types/types'
import { createSlice } from '@reduxjs/toolkit'

interface CommentsState {
  comments: Comment[]
}

const initialState: CommentsState = {
  comments: [],
}

const CommentsSlice = createSlice({
  name: 'commentsReducer',
  initialState,
  reducers: {
    fetchAllComments(state, action) {
      return { comments: action.payload }
    },
    addComment(state, action) {
      const maxId = state.comments.length
        ? Math.max(...state.comments.map((c) => c.id || 0))
        : 0
      const commentWithId = { ...action.payload, id: maxId + 1 }
      return { comments: [...state.comments, commentWithId] }
    },
    editComment(state, action) {
      return {
        comments: state.comments.map((comment) =>
          comment.id === action.payload.id
            ? action.payload.updatedComment
            : comment
        ),
      }
    },
    deleteComment(state, action) {
      return {
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      }
    },
  },
})
export const { fetchAllComments, addComment, deleteComment, editComment } =
  CommentsSlice.actions
export default CommentsSlice.reducer
