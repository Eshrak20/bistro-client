 
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    const { logOut } = useAuth(); 
    
    useEffect(() => {
        if (!user) {
            toast.info("Please log in.");
  }
}, [user]);

if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
}

if (user && isAdmin) {
  return <div>{children}</div>;
} else {
  <ToastContainer />;
   logOut();
  // alert("Please log in."); 
  return <Navigate to="/login" state={{ from: location }} replace />;
}
};

export default AdminRoutes;

 