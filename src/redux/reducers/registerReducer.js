import {USER_CONFIRMATION_SUCCESS, USER_REGISTER_COMPLETE, USER_REGISTER_SUCCESS} from "../actions/constants";

const initialState = {
    registrationSuccess: false,
    confirmationSuccess: false
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        registrationSuccess: true
      };
    case USER_CONFIRMATION_SUCCESS:
      return {
        ...state,
        confirmationSuccess: true
      };
    case USER_REGISTER_COMPLETE:
      return {
        ...state,
        confirmationSuccess: false,
        registrationSuccess: false
      };
    default:
      return state;
  }
}

export default registerReducer
