import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/slice'
import commentReducer from './slices/commentsSlice'
import userReducer from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    posts_reducer: postReducer,
    comments_reducer: commentReducer,
    users_reducer: userReducer,
  },
})

export type UserState = ReturnType<typeof userReducer>
export type RootState = ReturnType<typeof postReducer>
export type ComState = ReturnType<typeof commentReducer>
export default store
