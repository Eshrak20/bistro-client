import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaHome,
  FaRegCaretSquareRight,
  FaComment,
  FaBook,
  FaVoicemail,
  FaUtensils,
  FaUsers,
   
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
  
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin()

  // TODO: load data from the server to have dynamic isAdmin based on Data

  return (
    <div style={{margin:'0px !important'}}  className="drawer mx-0 w-full lg:drawer-open  ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center w-full">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
          {isAdmin ? (
             <>
             <li>
               <NavLink to="/dashboard/adminhome">
                 <FaHome></FaHome>ADMIN HOME
               </NavLink>
             </li>
             <li>
               <NavLink to="/dashboard/addItem">
                 <FaUtensils></FaUtensils>ADD ITEM
               </NavLink>
             </li>
             <li>
               <NavLink to="/dashboard/manageitems">
                 <FaWallet></FaWallet>MANAGE ITEMS
               </NavLink>
             </li>
             <li>
               <div className="flex">
                 <NavLink className="flex gap-2" to="/dashboard/mycart">
                   <FaShoppingCart></FaShoppingCart>MY BOOKINGS
                 </NavLink>
                 
               </div>
             </li>
             <li>
               <NavLink to="/dashboard/allusers">
                 <FaUsers></FaUsers>ALL USERS
               </NavLink>
             </li>
             <li>
               <NavLink to="/dashboard/bookings">
                 <FaBook></FaBook>MANAGE BOOKING
               </NavLink>
             </li>
           </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome>USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaRegCaretSquareRight></FaRegCaretSquareRight>RESERVATION
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet></FaWallet>PAYMENT 
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payemntHistory">
                  <FaWallet></FaWallet>PAYMENT HISTORY
                </NavLink>
              </li>
             
              <li>
                <div className="flex">
                  <NavLink className="flex gap-2" to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>MY CART
                  </NavLink>
                  <div className="badge badge-error text-lg p-3 ">
                    +{cart?.length || 0}
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">
                  <FaComment></FaComment>ADD REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>MY BOOKING
                </NavLink>
              </li>
            </>
          )}

          {/* Sidebar content here */}

          <div className="divider m"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBook></FaBook>MENU
            </NavLink>
            <NavLink to="/order/Salads">
              <FaShoppingCart></FaShoppingCart>SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <FaVoicemail></FaVoicemail>CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
