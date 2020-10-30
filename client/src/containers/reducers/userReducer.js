const userReducer = (state = "NOT_LOGGED_IN", action) => {
  console.log(action);
  switch (action.type) {
    case "LOG_IN":
      // console.log("LOGING IN");

      return localStorage.getItem("jwtToken");
    default:
      return state;
  }
};

export default userReducer;
