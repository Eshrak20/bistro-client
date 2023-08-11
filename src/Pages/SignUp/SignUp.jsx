import img from "../../../src/assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate   } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../SocialLogin/SocialLogin";


const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, emailVerification, updateUserProfile } = useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await createUser(data.email, data.password);
      await emailVerification(data.email);
      await updateUserProfile(data.name, data.photoURL);

      const saveUser = { name: data.name, email: data.email };
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saveUser),
      });
      
      const responseData = await response.json();
      if (responseData.insertedId) {
        console.log(responseData);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Please check your email to log in to your Account!',
          didClose: () => {
               // Redirect to the login page after Swal modal is closed
            navigate('/login');
          },

        });
      }
    } catch (error) {
      // Handle and display error messages
      console.error(error);
    }
  };

  // Rest of the code...

 

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  type="text"
                   
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.PhotoURL && (
                  <span className="text-red-500">Photo URL is required</span>
                )}
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].)/i,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password must have one Uppercase one lower case one number
                    and one special character{" "}
                  </span>
                )}
              </div>

              <div className="form-control mt-6 ">
                <input
                  className="btn bg-yellow-600 text-white font-bold "
                  type="submit"
                  value="SignUp"
                />
              </div>

              <p className="text-center mt-2 text-yellow-600    ">
                Already have account ?{" "}
              </p>
              <Link  to="/login">
                <p className="text-center text-yellow-600  font-semibold">Please Log In !!!</p>
              </Link>
            </form>
            <SocialLogin></SocialLogin>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
