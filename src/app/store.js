import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counter/counterSlice'
import postsSlice from '../store/post/postsSlice'
import rootReducer from '../store/rootReducer'
import usersReducers from '../store/user/usersSlice'
export const store = configureStore({
  reducer: {
    cake:rootReducer,
    counter: counterReducer,
    posts:postsSlice,
    users:usersReducers
  },
})