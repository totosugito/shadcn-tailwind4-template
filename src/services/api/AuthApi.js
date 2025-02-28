import {toast} from "react-hot-toast"
import {apiConnector} from "shared/services/apiConnector"
import {setUserLogin} from "shared/stores/authSlice";
import {AppApi} from "src/services";
import {AppRoutes} from "src/routers/router";

// ================ sign Up ================
export function http_signup(role, email, username, password) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("POST", AppApi.auth.register, {
        role,
        email,
        username,
        password,
      })

      if (!response.data.isSuccess) {
        return ({status: false, msg: response.data.message});
      }

      return ({status: true, msg: ""});
    } catch (error) {
      toast.error(error.message)
      return ({status: false, msg: error.message});
    }
  }
}


// ================ Login ================
export function http_login(email, password) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("POST", AppApi.auth.login, {
        email,
        password,
      })

      if (!response.data.isSuccess) {
        return ({status: false, msg: response.data.message});
      }

      dispatch(setUserLogin({token: response.data.data.token, user: response.data.data}));
      return ({status: true, msg: ""});
    } catch (error) {
      toast.error(error.message)
      return ({status: false, msg: error.message});
    }
  }
}

// ================ Logout ================
export function http_logout(navigate) {
  return (dispatch) => {
    dispatch(setUserLogin({token: "", user: null}));
    navigate(AppRoutes.auth.login.to);
  }
}
