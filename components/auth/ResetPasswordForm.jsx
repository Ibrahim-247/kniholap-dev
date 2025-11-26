'use client'

import { useForm } from 'react-hook-form';
import CommonInputWrapper from '../common/CommonInputWrapper';
import { useRouter } from 'next/navigation';
import { validatePassword } from '@/utils/validatePassword';
import CommonBtn from '../common/CommonBtn';
import { useAuth } from '@/hooks/auth.hook';

const ResetPasswordForm = () => {
    const { resetNewPassword } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        resetNewPassword.mutate({
            password: data.password,
        });
    }

    // main render
    return (
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            {/* password */}
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="password"
                name="password"
                placeholder="Enter password"
                register_as="password"
                label="Password:"
                validationRules={{
                    required: "This field is required",
                    validate: validatePassword,
                }}
            />
            {/* confirm password */}
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="password"
                name="password_confirmation"
                placeholder="Confirm password"
                register_as="password_confirmation"
                label="Confirm Password:"
                validationRules={{
                    validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                }}
            />
            {/* submit button */}
            <CommonBtn type="submit" className={`sm:mt-4 mt-2`} isLoading={resetNewPassword.isPending} disabled={resetNewPassword.isPending} >
                Reset Password
            </CommonBtn>
        </form>
    )
}

export default ResetPasswordForm