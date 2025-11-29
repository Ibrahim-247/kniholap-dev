import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import toast from "react-hot-toast";

const useReviews = () => {
  const axiosInstance = axiosPrivateClient();
  const queryClient = useQueryClient();

  const handleBookReviewMutation = useMutation({
    mutationKey: ["handleBookReview"],
    mutationFn: async (data) => {
      const response = await axiosInstance.post(
        `/auth/book/review/store`,
        data
      );
      return response?.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Book review created successfully!");
      queryClient.invalidateQueries({ queryKey: ["books"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
          "Failed to create book review. Please try again."
      );
    },
  });

  // Note: export all things
  return {
    handleBookReviewMutation,
    isLoading: handleBookReviewMutation.isLoading,
    isPending: handleBookReviewMutation.isPending,
    isError: handleBookReviewMutation.isError,
  };
};
export default useReviews;