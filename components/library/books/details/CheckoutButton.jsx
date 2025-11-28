"use client";
import CommonBtn from "@/components/common/CommonBtn";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import { useMutation } from "@tanstack/react-query";

const CheckoutButton = ({ book }) => {
    const { id } = book || {};
    const axiosInstance = axiosPrivateClient();

    // Note: handle checkout mutation
    const handleCheckoutMutation = useMutation({
        mutationKey: ["handleCheckout"],
        mutationFn: async () => {
            const response = await axiosInstance.post(`/auth/create/checkout-session`, {
                book_id: id,
            });
            return response.data;
        },
        onSuccess: (data) => {
            const url = data?.data?.checkout_url;
            // Note: Redirect to the checkout URL
            // if (url) {
            //     window.location.href = url;
            // } else {
            //     console.error("checkout_url missing in API response:", data);
            // }
            // Note: using ternary operator
            url ? window.location.href = url : console.error("checkout_url missing in API response:", data);
        },
        onError: (error) => {
            // console.error("Checkout error:", error);
        },
    });
    const handleCheckout = () => {
        handleCheckoutMutation.mutate()
    }

    // Note: main ui component
    return (
        <>
            {book?.type === "ebook" ? (
                <CommonBtn
                    link={true}
                    path={`/library/book/${book?.slug}/read`}
                    className="rounded-full hover:opacity-90 hover:bg-secondary transition-colors duration-300 xl:mt-5 hover:text-white"
                >
                    Read Now
                </CommonBtn>
            ) : (
                <CommonBtn
                    onclick={handleCheckout}
                    disabled={handleCheckoutMutation.isPending}
                    className="rounded-full hover:opacity-90 hover:bg-secondary transition-colors duration-300 xl:mt-5 hover:text-white"
                >
                    {handleCheckoutMutation.isPending ? "Loading..." : "Buy Now"}
                </CommonBtn>
            )}
        </>
    );
};
export default CheckoutButton;