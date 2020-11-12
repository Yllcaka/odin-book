const userReducer = (state = "NOT_LOGGED_IN", action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...action.payload };
    case "LOG_OUT":
      return {};
    default:
      return state;
  }
};

export default userReducer;
