import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'
import { tokenMiddleware } from './middleware';
import registerReducer from './reducers/registerReducer';
import setListReducer from './reducers/setListReducer';

const store = configureStore({
  reducer : {
    auth: authReducer,
    registration: registerReducer,
    setList: setListReducer
  },
  middleware: (getDefaultMiddleware) =>
  [...getDefaultMiddleware(), tokenMiddleware]


})

export default store;
