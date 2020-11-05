const userReducer = (state = "NOT_LOGGED_IN", action) => {
  switch (action.type) {
    case "LOG_IN":
      return { token: localStorage.getItem("jwtToken") };
    default:
      return state;
  }
};

export default userReducer;
