import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useReviews  = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access-token");
  // console.log({ token });
  const [axiosSecure] = useAxiosSecure();
  const {data: reviews = [] ,refetch } = useQuery({
    queryKey: ["reviews", user?.email],
    enabled: !loading && !!token && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [reviews, refetch];
};

export default useReviews ;
 