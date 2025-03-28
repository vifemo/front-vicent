import { createStore } from 'redux'

import postReducer from '../reducers/postReducer'

const store = createStore(postReducer)
export type RootState = ReturnType<typeof postReducer>
export default store
