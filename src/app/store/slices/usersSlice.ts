import { User } from '../../types/types'
import { createSlice } from '@reduxjs/toolkit'

interface UsersState {
  users: User[]
}

const initialState: UsersState = {
  users: [],
}

const UsersSlice = createSlice({
  name: 'usersReducer',
  initialState,
  reducers: {
    fetchAllUsers(state, action) {
      console.log('users', action.payload)
      return { users: action.payload }
    },
  },
})

export const { fetchAllUsers } = UsersSlice.actions
export default UsersSlice.reducer
