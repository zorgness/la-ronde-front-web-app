import { USER_LOGIN_SUCCESS, USER_PROFILE_RECEIVED, USER_LOGOUT } from "./constants";


export const tokenMiddleware = store => next => action => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('jwtToken', action.token);
      localStorage.setItem('userId', action.userId);
      localStorage.setItem('authenticated', action.isAuthenticated);
      break;
    case USER_PROFILE_RECEIVED:
      localStorage.setItem('userData', JSON.stringify(action.userData));
      break;
    case USER_LOGOUT:
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('authenticated');
      localStorage.removeItem('userData');
    break;
      default:
  }
  next(action);
}
