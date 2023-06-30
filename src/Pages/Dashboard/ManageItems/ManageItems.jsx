 

import { Helmet } from "react-helmet-async";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const[carts] = useCart()
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteMenuRequest = axiosSecure.delete(`/menu/${item._id}`);
        const deleteCartRequest = axiosSecure.delete(`/carts/${item._id}`);
  
        const cartToDelete = carts.find((cart) => cart._id === item._id);
  
        if (cartToDelete) {
          Promise.all([deleteMenuRequest, deleteCartRequest])
            .then((res) => {
              const deletedMenuCount = res[0].data.deletedCount;
              const deletedCartCount = res[1].data.deletedCount;
  
              if (deletedMenuCount > 0 && deletedCartCount > 0) {
                refetch();
                Swal.fire("Deleted!", "Your item(s) have been deleted.", "success");
              } else {
                Swal.fire("Error", "Failed to delete item(s).", "error");
              }
            })
            .catch((error) => {
              console.error("Error deleting item(s)", error);
              Swal.fire("Error", "Failed to delete item(s).", "error");
            });
        } else {
          // Delete only menu item
          deleteMenuRequest
            .then((res) => {
              const deletedMenuCount = res.data.deletedCount;
  
              if (deletedMenuCount > 0) {
                refetch();
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
              } else {
                Swal.fire("Error", "Failed to delete item.", "error");
              }
            })
            .catch((error) => {
              console.error("Error deleting item", error);
              Swal.fire("Error", "Failed to delete item.", "error");
            });
        }
      }
    });
  };
  
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-serif h-[120px] flex justify-evenly gap-20 items-center">
        <p className="text-2xl">Total Items: {menu.length} </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-slate-200">
            <tr>
              <th>INDEX</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Item" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
