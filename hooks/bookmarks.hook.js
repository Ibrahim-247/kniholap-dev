import { useMutation } from "@tanstack/react-query";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import toast from "react-hot-toast";

const useBookMarks = () => {
  const axiosInstance = axiosPrivateClient();

  // Note: handle book marks mutation
  const handleBookMarksMutation = useMutation({
    mutationKey: ["addBookMarks"],
    mutationFn: async (data) => {
      const response = await axiosInstance.post(`/auth/wishlist/store`, data);
      return response?.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Book add to bookmarks successfully!");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    },
  });

  // Note: export all things
  return {
    handleBookMarksMutation,
  };
};
export default useBookMarks;
