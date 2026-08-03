import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';

// configureStore automatically includes redux-thunk in its default
// middleware stack, so async action creators (thunks) work out of the box.
// We spell it out below anyway for clarity/learning purposes.
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
