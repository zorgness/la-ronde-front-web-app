import { USER_SET_LIST_RECEIVED } from "../constants"


const setListReducer = (state, action) => {
  switch (action.type) {
    case USER_SET_LIST_RECEIVED:
      return {
        ...state,
        data: action.data
      }

    default:
      break;
  }
}

export default setListReducer
