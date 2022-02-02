import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import invoiceSaga from "./invoices/saga"
import orderSaga from "./OrderPage/saga"

//Start Administrator Module
import PagesSaga from "./admin/Pages/saga"
import masterSaga from "./Master/saga"
//End

export default function* rootSaga() {
  yield all([
    //public
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(invoiceSaga),
    fork(orderSaga),
    fork(PagesSaga),
    fork(masterSaga),

  ])
}
