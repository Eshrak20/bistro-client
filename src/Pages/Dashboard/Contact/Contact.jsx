import { FaClock, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto text-center my-8">
        <h3 className="text-yellow-600 mb-2">--- Our location ---</h3>
        <p className="text-4xl uppercase border-y-4 py-4 font-bold">
          Visit us
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

export default Contact;
