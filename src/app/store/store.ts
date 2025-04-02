import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/slice'

export const store = configureStore({
  reducer: {
    posts_reducer: postReducer,
  },
})

export type RootState = ReturnType<typeof postReducer>
export default store
