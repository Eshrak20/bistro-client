 
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const GooglePhone = () => {
  const { googleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true }); // Navigate after successful sign-in
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default GooglePhone;


