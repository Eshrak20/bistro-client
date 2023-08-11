import { useQuery } from "@tanstack/react-query";

// const useMenu = () => {
//   const {
//     refetch,
//     data: menu = [],
//     isLoading: loading,
//   } = useQuery({
//     queryKey: ["menu"],
//     queryFn: async () => {
//       const res = await fetch("http://localhost:5000/menu");
//       return res.json();
//     },
//   });
//   return [menu, refetch, loading];
// };
// export default useMenu;
const useMenu = () => {
  const {
    refetch,
    data: menu = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/menu");
        if (!res.ok) {
          throw new Error("Error fetching menu data");
        }
        return res.json();
      } catch (error) {
        // Handle error
        console.error(error);
        // You can throw the error again if you want to propagate it to the component using the hook
        throw error;
      }
    },
  });

  return [menu, refetch, loading];
};

export default useMenu;
