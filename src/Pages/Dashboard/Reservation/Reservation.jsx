import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaClock, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const Reservation = () => {
  const { register, handleSubmit } = useForm();
  const [cart] = useCart();
  const [axiosSecure] = useAxiosSecure();
  const onSubmit = (data) => {
    const { date, time, person, name, number, email } = data;
    const newItem = {
      date,
      time,
      person,
      name,
      email,
      number,
    };
    console.log(newItem);
    axiosSecure.post("/reservation", newItem).then((data) => {
      console.log("after posting new reservation Item", data.data);
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Table booked successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="md:ml-28">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="mx-auto text-center my-8">
        <h3 className="text-yellow-600 mb-2">--- Reservation ---</h3>
        <p className="text-4xl uppercase border-y-4 py-4 font-bold">
          Book a table
        </p>
      </div>
      <form
        className="text-center justify-center flex-row  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid md:grid-cols-3 gap-y-14 gap-x-28">
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Date*</span>
            </label>
            <input
              type="date"
              // placeholder="mm/dd/yyyy"
              className="input input-bordered w-full max-w-xs"
              {...register("date", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Time*</span>
            </label>
            <input
              type="time"
              placeholder="time"
              className="input input-bordered w-full max-w-xs"
              {...register("time", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Guest*</span>
            </label>
            <input
              type="number"
              placeholder="1 person"
              className="input input-bordered w-full max-w-xs"
              {...register("person", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Phone*</span>
            </label>
            <input
              type="number"
              placeholder="Your Phone"
              className="input input-bordered w-full max-w-xs"
              {...register("number", { required: true, maxLength: 11 })}
            />
          </div>
          <div className="form-control w-full max-w-xs mb-5">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              defaultValue={cart[0].email}
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: true, maxLength: 80 })}
            />
          </div>
        </div>

        <input
          style={{ background: "#835D23" }}
          className="btn items-center my-20 text-white"
          type="submit"
          value="Book A table"
        />
      </form>

      {/* Our location part ............................ */}

      <div className="mx-auto text-center my-8">
        <h3 className="text-yellow-600 mb-2">--- Visit us ---</h3>
        <p className="text-4xl uppercase border-y-4 py-4 font-bold">
          Our location
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-3 mb-44 ">
        <div>
          <button className="text-white h-12 none w-[280px] rounded-md bg-[#D1A054] mb-20">
            <FaPhoneAlt
              style={{ display: "inline" }}
              className="text-2xl"
            ></FaPhoneAlt>
          </button>

          <div className="text-center">
            <p className="text-3xl mb-4 uppercase">Phone</p>
            <p>+880 13 09 17 63 98</p>
          </div>
        </div>
        <div>
          <button className="text-white h-12 none w-[280px] rounded-md bg-[#D1A054] mb-20">
            <FaLocationArrow
              style={{ display: "inline" }}
              className="text-2xl"
            ></FaLocationArrow>
          </button>

          <div className="text-center">
            <p className="text-3xl mb-4 uppercase"> Address </p>
            <p>+880 13 09 17 63 98</p>
          </div>
        </div>
        <div>
          <button className="text-white h-12 none w-[280px] rounded-md bg-[#D1A054] mb-20 text-center align-middle">
            <FaClock
              style={{ display: "inline" }}
              className="text-2xl"
            ></FaClock>
          </button>

          <div className="text-center">
            <p className="text-3xl mb-4 uppercase -mt-2">Work Hours</p>
            <p>Mon - Fri : 08:00 - 22:00</p>
            <p>Sat - Sun : 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
