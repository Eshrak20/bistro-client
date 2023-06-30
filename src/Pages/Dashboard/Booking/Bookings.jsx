import { Helmet } from "react-helmet-async";
import useBookings from "../../../Hooks/useBookings";
import { FaArrowAltCircleRight, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
 
 

const Bookings = () => {
  const [reservation, refetch] = useBookings();
  const [axiosSecure] = useAxiosSecure();
  
  // console.log({cart});
  // How does reduce work

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
        axiosSecure.delete(`/reservation/${item._id}`).then((res) => {
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
      <div className="uppercase font-serif  h-[120px] flex justify-between  items-center">
        <p className="text-2xl text-centers">Total Bookings : {reservation.length} </p>
        <button className="btn text-slate-100 bg-[#D1A054] btn-sm">Clear All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-[#D1A054] text-slate-200">
            <tr>
              <th>INDEX</th>
              <th>USER EMAIL</th>
              <th>PHONE NUMBER</th>
              <th>BOOKING DATE</th>
              <th>BOOKING TIME</th>
              <th>Person</th>
              <th>ACTIVITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {reservation.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td className="text-end">{item.email }</td>
                <td>{item.number}</td>
                <td className="text-center">{item.date }</td>
                <td className="text-center">{item.time }</td>
                <td className="text-center">{item.person }</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-lg"
                  >
                     <FaArrowAltCircleRight></FaArrowAltCircleRight>
                     
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

export default Bookings;
