import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'
import { tokenMiddleware } from './middleware';
import registerReducer from './reducers/registerReducer';

const store = configureStore({
  reducer : {
    auth: authReducer,
    registration: registerReducer
  },
  middleware: (getDefaultMiddleware) =>
  [...getDefaultMiddleware(), tokenMiddleware]


})

export default store;
