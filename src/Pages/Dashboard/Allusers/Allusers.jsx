import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const Allusers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user} =  useAuth()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (users) => {
    fetch(`https://bistro-boss-server-final-eshrakg62-gmailcom.vercel.app/users/admin/${users._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${users.name} is an Admin Now !`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleDelete = (users) => {
    fetch(`https://bistro-boss-server-final-eshrakg62-gmailcom.vercel.app/users/admin/${users._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${users.name} is DELETED !`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <>
        <p className="text-2xl">Total Users : {users.length} </p>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className=" bg-[#D1A054] text-slate-200">
              <tr>
                <th>#</th>
                <th className="pr-11">USER IMAGE</th>
                <th>USER NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users, index) => (
                <tr key={users._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 ">
                        <img src={user.photoURL || "default-avatar.png"} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{users.name}</td>
                  <td className="text-start">{users.email}</td>
                  <td>
                    {users.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(users)}
                        className="btn btn-ghost btn-lg p-2"
                      >
                        <FaUsers></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(users)}
                      className="btn btn-ghost btn-lg "
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default Allusers;
