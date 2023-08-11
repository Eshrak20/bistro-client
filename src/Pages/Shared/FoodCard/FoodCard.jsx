import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCartpost from "../../../Hooks/useCartpost";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id,name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  const {refetch} = useCartpost(); // Import and use the useCartpost hook
  const navigate = useNavigate();
  const location = useLocation();

  // const handleAddToCart = () => {
  //   console.log(item);
  //   if (user && user.email) {
  //     const orderItem = { name, image, price, email: user.email };
  //     axios
  //       .post("http://localhost:5000/carts", orderItem, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((response) => {
  //         if (response.data.insertedId) {
  //           refetch(); // Call the refetch function to update the cart
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Your order has been saved",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       })
  //       .catch(() => {
  //         // Handle any errors
  //       });
  //   } else {
  //     Swal.fire({
  //       title: "Please log in to add to cart",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Log in now",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate("/login", { state: { from: location } });
  //       }
  //     });
  //   }
  // };
  const handleAddToCart = () => {
    console.log(item);
    console.log(cart);
    if (user && user.email) {
      const orderItem = { _id,name, image, price, email: user.email };
  
      // Check if the item already exists in the cart
      const existingCartItem = cart.find((cartItem) => cartItem?._id === item._id);
  
      if (existingCartItem) {
        // Show a message to the user indicating that the item is already in the cart
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "This item is already in your cart",
          showConfirmButton: false,
          timer: 1500,
        });
        return; // Exit the function to prevent adding the item again
      }
  
      axios
        .post("http://localhost:5000/carts", orderItem, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.insertedId) {
            refetch(); // Call the refetch function to update the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your order has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch(() => {
          // Handle any errors
        });
    } else {
      Swal.fire({
        title: "Please log in to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="img" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 px-3 rounded-lg">
        ${price}
      </p>

      <div className="card-body flex flex-col items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn bg-orange-50 border-0 border-b-4 shadow-2xl mt-2 text-center shadow-orange-700 border-orange-700 mx-auto"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
