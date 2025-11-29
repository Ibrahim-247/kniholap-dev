"use client";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import ScreenLoading from "@/components/common/ScreenLoading";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ChangePassword = () => {
    const axiosInstance = axiosPrivateClient();

    // Note: react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    // Note: handle change password submit
    const handleChangePasswordMutation = useMutation({
        mutationKey: ["passwordChange"],
        mutationFn: async (data) => {
            const response = await axiosInstance.post(`/user/password/reset`, data);
            return response?.data;
        },
        onSuccess: () => {
            toast.success("Password changed successfully!");
            reset();
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to change password. Please try again.");
        }
    });

    // Note: form submit
    const handleSubmitForm = (data) => {
        handleChangePasswordMutation.mutate(data);
    };

    // Note: main form render
    return (
        <div className="w-full bg-white rounded-3xl xl:p-8 lg:p-7 md:p-6 p-4 shadow-md">
            <h3 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-semibold pb-5">Change Password</h3>
            <form
                onSubmit={handleSubmit(handleSubmitForm)}
                className="w-full flex flex-col gap-6"
            >

                {/* current password */}
                <CommonInputWrapper
                    register={register}
                    errors={errors}
                    type="password"
                    name="current_password"
                    placeholder="Enter old password"
                    register_as="current_password"
                    label="Old Password:"
                    validationRules={{
                        required: "This field is required",
                    }}
                />

                {/* new passwrd */}
                <CommonInputWrapper
                    register={register}
                    errors={errors}
                    type="password"
                    name="new_password"
                    placeholder="Enter new password"
                    register_as="new_password"
                    label="New Password:"
                    validationRules={{
                        required: "This field is required",
                    }}
                />

                {/* confirm password */}
                <CommonInputWrapper
                    register={register}
                    errors={errors}
                    type="password"
                    name="confirm_new_password"
                    placeholder="Enter confirm password"
                    register_as="confirm_new_password"
                    label="Confirm Password:"
                    validationRules={{
                        required: "This field is required",
                    }}
                />

                {/* save button */}
                <button
                    type="submit"
                    disabled={handleChangePasswordMutation.isPending}
                    className="col-span-2 w-full cursor-pointer bg-[#F84E12] text-white px-5 py-2 rounded-lg mt-3"
                >
                    {handleChangePasswordMutation.isPending ? "Changing..." : "Change Password"}
                </button>

            </form>
        </div>
    );
};
export default ChangePassword;