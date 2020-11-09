const userReducer = (state = "NOT_LOGGED_IN", action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
