import axios from "axios";
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "../actions/types";
import { returnErrors } from "./messages";

// Check Token Loasd user

export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  //   get Token
  const token = getState().auth.token;

  // Headers
  const config = {
    "Content-Type": "application/json"
  };

  //   if Token exists add to headers

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios.get("/api/auth/user/", config).then(res => {
    dispatch({ type: USER_LOADED, payload: res.data });
  });
};
