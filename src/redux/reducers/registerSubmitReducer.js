
export const initialReducerValue = {
  loading: false,
  error: null,
  username: "",
  password: "",
  verification: "",
  email: "",
  lastName: "",
  firstName: "",
  city: "",
  phone: "",

};

export const registerSubmitReducer = (state, action) =>  {
  if (action.type === "input") {
    return {
      ...state,
      [action.name]: action.value
    };
  }
  else if (action.type === "done") {
    return {
      ...state,
      state: initialReducerValue

    };
  }
  // } else if (action.type === "submit") {
  //   return {
  //     ...state,
  //     error: null,
  //     loading: true
  //   };
  // } else if (action.type === "success") {
  //   return {
  //     ...state,
  //     registered: true,
  //     loading: false,
  //     error: null
  //   };
  // } else if (action.type === "error") {
  //   return {
  //     ...state,
  //     loading: false,
  //     error: action.error
  //   };
  // }
}
