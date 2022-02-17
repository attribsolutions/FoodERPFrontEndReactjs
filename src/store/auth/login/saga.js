import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes"
import { apiError, loginSuccess, loginSuccessData, logoutUserSuccess } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postJwtLogin,
  postSimpleLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper"
import { useHistory } from "react-router-dom";
const fireBaseBackend = getFirebaseBackend()

function* loginUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      )
      yield put(loginSuccess(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      })
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      try {
        // console.log("login data",user)
        const response = yield call(postSimpleLogin, user)
        // console.log("login response", response.data);
        yield put(loginSuccessData(response.data));
        yield put(loginSuccess(response))
        localStorage.setItem("AttribUser", JSON.stringify({ "UserName": response.data.UserName, "UserID": response.data.UserID, }))
        localStorage.setItem("divisions",JSON.stringify(response.data.Divisions));
        localStorage.setItem("UserID",JSON.stringify(response.data.UserID));
        localStorage.setItem("RollID",JSON.stringify(response.data.roleID));
        localStorage.setItem("DivisionID",JSON.stringify(response.data.DivisionID));

       const Dlenght= response.data.Divisions;

        if (!Dlenght.length > 1) {
        //  localStorage.setItem("DivisionID",JSON.stringify(response.data.Divisions));
        history.push("/dashboard")
          
        } else {
          history.push("/division")
          
        }
      } catch (e) {
        console.log("error", e)
      }
    }
  } catch (error) {
    yield put(apiError(error))
    console.log("error", error)
  }
}

function* logoutUser({ payload: { history } }) {

  try {
    localStorage.removeItem("authUser")
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout)
      yield put(logoutUserSuccess(response))

    }
    yield localStorage.clear();
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend()
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      )
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else {
      const response = yield call(postSocialLogin, data)
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeLatest(SOCIAL_LOGIN, socialLogin)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga;
