import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    useEffect(() => {
        if (!user) {
            toast.info("Please log in.");
  }
}, [user]);

if (loading) {
    return <progress className="progress w-56"></progress>;
}

if (user) {
  return <div>{children}</div>;
} else {
  <ToastContainer />;
  // alert("Please log in.");
  return <Navigate to="/login" state={{ from: location }} replace />;
}
};

export default PrivateRoute;

 