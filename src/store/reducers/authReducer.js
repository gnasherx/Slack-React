const initialState = {
  signinError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return state;
    case "SIGNUP_FAILED":
      return {
        ...state,
        error: action.error
      };
    case "SIGNIN_SUCCESS":
      return state;
    case "SIGNIN_FAILED":
      return {
        ...state,
        signinError: action.error
      };
    default:
      return state;
  }
};

export default authReducer;
