import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

//invoices
import invoices from "./invoices/reducer";
import orders from "./OrderPage/reducer";

//Start Administrator Module
import Pages from "./admin/Pages/reducer";

import addMaster from "./Master/reducer";

//End

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,
  invoices,
  orders,
  Pages,
  addMaster,
});

export default rootReducer;
