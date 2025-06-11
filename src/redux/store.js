import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileReducer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Redux Thunk included by default
});

export default store;