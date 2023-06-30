import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCartpost = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading && !!token && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return { cart, refetch }; // Return an object instead of an array
};

export default useCartpost;
