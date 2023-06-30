import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
 

const MyCart = () => {
  const [cart, refetch] = useCart();
  const [axiosSecure] = useAxiosSecure();
  // console.log({cart});
  // How does reduce work
  const total = cart.reduce((sum, item) => item.price + sum, 0);
 
  //Delete operation
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
        axiosSecure.delete(`/carts/${item._id}`).then((res) => {
            console.log('deleted res', res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-serif  h-[120px] flex justify-evenly gap-20 items-center">
        <p className="text-2xl">Total Items : {cart.length} </p>
        <p className="text-2xl">Total Price : $ {total}</p>
    
        <button className="btn text-slate-100 bg-[#D1A054] btn-sm">pay</button>
      </div>
     
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-[#D1A054] text-slate-200">
            <tr>
              <th>INDEX</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
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
                    <FaTrash></FaTrash>
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

export default MyCart;
  