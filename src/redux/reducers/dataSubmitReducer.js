
export const initialRegisterValue = {
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

export const initialSetListValue = {
  name: "",
  theme: "",
  city: ""
}

export const initialSongValue = {
  name: "",
  creator: "",
  interpret: "",
  list: "",
  link: "",
  tone: "",
  tempo: "",
}

export const dataSubmitReducer = (state, action) =>  {
  if (action.type === "input") {
    return {
      ...state,
      [action.name]: action.value
    };
  }
  // else if (action.type === "done") {
  //   return {
  //     ...state,
  //     state: initialReducerValue

  //   };
  // }
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
