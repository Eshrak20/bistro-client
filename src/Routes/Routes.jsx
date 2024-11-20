import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import Bookings from "../Pages/Dashboard/Booking/Bookings";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Reviews from "../Pages/Dashboard/Review/Review";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import Contact from "../Pages/Dashboard/Contact/Contact";
export const router = createBrowserRouter([
  {
  path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "login",
        element:<Login></Login>,
      },
      {
        path: "signup",
        element:<SignUp></SignUp>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "/secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>,
      },
    ],
  },
  {
    path:"dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'allusers',
        element:<Allusers></Allusers>
      },
      {
        path:'addItem',
        element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
      },
      {
        path:'manageitems',
        element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path:'reservations',
        element: <Reservation></Reservation>
      },
      {
        path:'bookings',
        element: <Bookings></Bookings>
      },
      {
        path:'userhome',
        element: <UserHome></UserHome>
      },
      {
        path:'adminhome',
        element: <AdminHome></AdminHome>
      },
      {
        path:'payment',
        element: <Payment></Payment>
      },
      {
        path:'reviews',
        element: <Reviews></Reviews>
      },
      {
        path:'payemntHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      },
    ]
  }
]);
