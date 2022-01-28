import React from "react"
import { Redirect } from "react-router-dom"

//Dashboard
import Dashboard from "../pages/Dashboard/index";

// Authentication related pages
import userProfile from "../pages/Authentication/user-profile"
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import OrderPage from "../pages/Sale/OrderPage";
import OrderList from "../pages/Sale/OrderList";
import PurchaseOrderList from "../pages/Sale/PurchaseOrderList";


const userRoutes = [

  //dashboard
  { path: "/dashboard", component: Dashboard },

  //profile
  { path: "/profile", component: userProfile },

  //OrderPage Path
  { path: "/order", component: OrderPage },
  { path: "/orderList", component: OrderList },
  { path: "/porderList", component: PurchaseOrderList },



  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },

]

const authRoutes = [
  //authencation page
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
