import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  // console.log({ token });
  const [axiosSecure] = useAxiosSecure();
  const {data: cart = [] ,refetch } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading &&  !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);

      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
 