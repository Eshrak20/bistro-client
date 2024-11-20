import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBookings = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access-token");
  // console.log({ token });
  const [axiosSecure] = useAxiosSecure();
  const {data: reservation = [] ,refetch } = useQuery({
    queryKey: ["reservation", user?.email],
    enabled: !loading && !!token && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/reservation?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [reservation, refetch];
};

export default useBookings;
