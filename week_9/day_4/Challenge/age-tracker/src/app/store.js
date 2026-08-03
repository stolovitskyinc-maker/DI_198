import { configureStore } from '@reduxjs/toolkit'
import ageReducer from '../features/age/ageSlice'

export const store = configureStore({
  reducer: {
    age: ageReducer,
  },
  // Thunk middleware is included by default in configureStore's
  // default middleware, so no extra setup is required.
})
