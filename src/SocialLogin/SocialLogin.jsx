import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
      fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
      })
          .then(res => res.json())
          .then(() => {
              navigate(from, { replace: true });
          })
  })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="divider">OR <h1></h1></div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className=" btn-circle  "
        >
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
