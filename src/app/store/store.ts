import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/slice'
import commentReducer from './slices/commentsSlice'

export const store = configureStore({
  reducer: {
    posts_reducer: postReducer,
    comments_reducer: commentReducer,
  },
})

export type RootState = ReturnType<typeof postReducer>
export type ComState = ReturnType<typeof commentReducer>
export default store
