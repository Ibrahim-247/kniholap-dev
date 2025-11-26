import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Note: form submit
    const handleSubmitForm = (data) => {
        console.log("Data", data);
    };


    // Note: main form render
    return (
        <div className="w-full bg-white rounded-3xl xl:p-8 lg:p-7 md:p-6 p-4 shadow-md">
            <h3 className="xl:text-3xl lg:text-2xl md:text-xl text-lg text-black font-semibold pb-5">Change Password</h3>
            <form
                onSubmit={handleSubmit(handleSubmitForm)}
                className="w-full flex flex-col gap-6"
            >

                {/* old password */}
                <CommonInputWrapper
                    register={register}
                    errors={errors}
                    type="password"
                    name="old_password"
                    placeholder="Enter old password"
                    register_as="old_password"
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
                    name="confirm_password"
                    placeholder="Enter confirm password"
                    register_as="confirm_password"
                    label="Confirm Password:"
                    validationRules={{
                        required: "This field is required",
                    }}
                />

                {/* save button */}
                <button
                    type="submit"
                    className="col-span-2 w-full cursor-pointer bg-[#F84E12] text-white px-5 py-2 rounded-lg mt-3"
                >
                    Save Changes
                </button>

            </form>
        </div>
    );
};
export default ChangePassword;