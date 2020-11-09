// import {} from "redux";
import getUserData from "../../api/getUserData";

const getData = (data) => ({ type: "LOG_IN", payload: data });

const getUserDataAction = () => {
  return (dispatch) => {
    getUserData().then((data) => dispatch(getData(data)));
  };
};

export default getUserDataAction;
