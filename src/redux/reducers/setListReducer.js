import { USER_SET_LIST_RECEIVED } from "../constants"

const initialState = {
  setListData: null
}

const setListReducer = (state=initialState, action) => {
  switch (action.type) {
    case USER_SET_LIST_RECEIVED:
      return {
        ...state,
        setListData: action.data
      }

    default:
      return state
  }
}

export default setListReducer
