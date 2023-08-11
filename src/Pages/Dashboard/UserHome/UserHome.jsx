import {
  FaBook,
  FaComment,
  FaFileContract,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useBookings from "../../../Hooks/useBookings";
import useReviews from "../../../Hooks/useReviews";
import useAuth from "../../../Hooks/useAuth";
import defaultPhotoURL from "../../../../src/assets/contact/Avatar.png";
import useMenu from "../../../Hooks/useMenu";
const UserHome = () => {
  const [cart] = useCart();
  const [reservation] = useBookings();
  const [reviews] = useReviews();
  const { user } = useAuth();
  const [menu] = useMenu();

  return (
    <div className="md:ml-5">
      <div className="grid md:grid-cols-3 gap-20 mb-20 ">
        <div className="card w-96   text-white flex-row card-body items-center bg-gradient-to-r from-violet-600  ">
          <FaWallet className="text-7xl"></FaWallet>
          <div className="card-body ">
            <p className="text-7xl">{menu.length}</p>
            <p className="text-2xl">Menu</p>
          </div>
        </div>
        <div className="card w-96 text-white flex-row card-body items-center bg-gradient-to-r from-yellow-500  ">
          <FaShoppingCart className="text-7xl"></FaShoppingCart>
          <div className="card-body ">
            <p className="text-7xl">{cart.length}</p>
            <p className="text-2xl">Shop</p>
          </div>
        </div>
        <div className="card w-96   text-white flex-row card-body items-center  bg-gradient-to-r from-red-500 ">
          <FaFileContract className="text-7xl"></FaFileContract>
          <div className="card-body ">
            <p className="text-7xl">{reservation.length}</p>
            <p className="text-2xl">Booking</p>
          </div>
        </div>
      </div>
      <div className=" w-full mt-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body flex-col justify-center text-center items-center bg-orange-100">
            <img
              className="rounded-full ring ring-primary w-1/2 mb-6 border-stone-950"
              src={user.photoURL || defaultPhotoURL}
              alt="photoURL "
            />
            <p className="text-4xl">{user.displayName}</p>
          </div>
          <div className="border-2 border-yellow-600 h-96"></div>
          <div className="card-body bg-yellow-100">
            <p className="text-4xl">Your Activities</p>
            <p className="text-2xl flex text-blue-700 gap-2">
              <FaShoppingCart></FaShoppingCart>Order : {cart.length}
            </p>
            <p className="text-2xl flex gap-2 text-green-700 ">
              <FaComment></FaComment>Review : {reviews.length}
            </p>
            <p className="text-2xl flex gap-2 text-yellow-600 ">
              <FaBook></FaBook>Booking : {reservation.length}
            </p>
            <p className="text-2xl flex gap-2 text-red-400 ">
              <FaWallet></FaWallet>Payment : 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
