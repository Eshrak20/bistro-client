import { LoadCanvasTemplate } from "react-simple-captcha";
import img from "../../../src/assets/others/authentication2.png";
import { loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef();
  const captchaRef = useRef(null);
  const [disabled, setDisable] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginError, setLoginError] = useState(false);
  const [emailDefaultValue, setEmailDefaultValue] = useState("");
  const [passwordDefaultValue, setPasswordDefaultValue] = useState("");

  const { signIn, ResetPass } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const user_captcha_value = captchaRef.current.value;
        console.log(user);

        if (!user.emailVerified) {
          setDisable(true);
          Swal.fire({
            icon: "warning",
            title: "Email Verification",
            text: "Please verify your email address to log in.",
            didClose: () => {
              // Clear the form fields
              form.email.value = emailDefaultValue;
              form.password.value = passwordDefaultValue;
              captchaRef.current.value = "";

              // Reset any login error state
              setLoginError(false);
            },
          });

          return;
        } else if (validateCaptcha(user_captcha_value)) {
          setDisable(false);
          navigate(from, { replace: true });
        } else {
          setDisable(true);
          Swal.fire({
            icon: "error",
            title: "Invalid Captcha",
            text: "Please enter the correct captcha value.",
            didClose: () => {
              // Clear the form fields
              form.email.value = emailDefaultValue;
              form.password.value = passwordDefaultValue;
              captchaRef.current.value = "";
              window.location.reload()
              // Reset any login error state
              setLoginError(false);
            },
          });

          return;
        }
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "An error occurred: " + error.message,
          didClose: () => {
            // Clear the form fields
            form.email.value = emailDefaultValue;
            form.password.value = passwordDefaultValue;
            captchaRef.current.value = "";

            // Reset any login error state
            setLoginError(false);
          },
        });
      });
  };

  const handleResetPassWord = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;

    ResetPass(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Please check your email to reset your password!",
        });
        return;
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Provide a valid email adress to reset the password!",
          footer: error.message,
        });
        return;
      });
  };

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
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100 pb-11">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  ref={emailRef}
                  defaultValue={emailDefaultValue}
                  onFocus={() => setEmailDefaultValue("")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  defaultValue={passwordDefaultValue}
                  onFocus={() => setPasswordDefaultValue("")}
                />
              </div>
              <div className="form-control">
                <label className="label mt-4">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                  ref={captchaRef}
                />
              </div>

              <div className="form-control mt-6 ">
                <button
                  disabled={disabled}
                  className="btn bg-yellow-600 text-white font-bold "
                >
                  Login
                </button>
              </div>
              <label className="label">
                <button
                  onClick={handleResetPassWord}
                  className="label-text-alt link link-hover text-center"
                >
                  Forgot password?
                </button>
              </label>

              <Link to="/signup">
                <p className="text-center mt-2 text-yellow-600    ">
                  New here Create a new account{" "}
                </p>
                <p className="text-center font-semibold text-yellow-600 ">
                  {" "}
                  Sign Up
                </p>
              </Link>
              {loginError && (
                <div className="error-message">
                  <p>
                    <small>Something went wrong with the login.</small>
                  </p>
                </div>
              )}
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
