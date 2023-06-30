import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const navOptions = (
    <>
      {user ? (
        <>
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-error w-22 "
          >
            Log out
          </button>
        </>
      ) : (
        <>
          <Link className="btn btn-outline btn-error w-22 " to="/login">
            Log In{" "}
          </Link>
        </>
      )}
    </>
  );

  return (
  <div className="flex justify-center">
      <div className="navbar fixed z-10 bg-opacity-25  bg-black text-white max-w-screen-xl ">
      <div className="navbar-start  ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow   w-52  bg-white bg-opacity-5 rounded-sm  "
          >
            <li>
              <Link to="/ ">Home</Link>
            </li>
            <li>
              <Link to="/menu">Our Menu</Link>
            </li>
            <li>
            <Link to="/dashboard/mycart">
              <button className="flex gap-3 items-center ">
                 <FaShoppingCart ></FaShoppingCart>
                <div className="badge badge-error ">+{cart?.length || 0}</div>
              </button>
            </Link>
            </li>
            <li>
              <li>
                <Link to="/order/Salads">Order Food</Link>
              </li>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss Restaurants</a>
      </div>

    

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 bg-white bg-opacity-5 rounded-sm ">
          <li>
            <Link to="/ ">Home</Link>
          </li>
          <li>
            <Link to="/menu">Our Menu</Link>
          </li>

          <li>
            <Link to="/order/Salads">Order Food</Link>
          </li>
          
          <li>
            <Link to="/dashboard/mycart">
              <button className="flex gap-3 items-center ">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-error ">+{cart?.length || 0}</div>
              </button>
            </Link>
          </li>
           
        </ul>
      </div>
      <div className="navbar-end">{navOptions}</div>
    </div>
  </div>
  );
};

export default NavBar;
