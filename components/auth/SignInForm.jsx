"use client";

import { useForm } from "react-hook-form";
import CommonInputWrapper from "../common/CommonInputWrapper";
import CommonBtn from "../common/CommonBtn";
import { useAuth } from "@/hooks/auth.hook";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ErrorText from "../common/ErrorText";
import Link from "next/link";
const SignInForm = () => {
    const [error, setError] = useState(null);
    // hooks
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { login } = useAuth();
    const router = useRouter();
    const onSubmit = (data) => {
        login.mutate(data, {
            onSuccess: (res) => {
                setError(null);
            },
            onError: (err) => {
                setError(err?.response?.data?.message || "Something went wrong!");
            },
        })
    }
    // main render
    return (
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="email"
                name="email"
                placeholder="Enter your email"
                register_as="email"
                label="Email address:"
                validationRules={{
                    required: "Email field is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid email address",
                    },
                }}
            />
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="password"
                name="password"
                placeholder="Enter your password"
                register_as="password"
                label="Password:"
                validationRules={{
                    required: "Password field is required",
                }}
            />
            <Link className="text-right text-primary underline" prefetch href="/auth/forgot_password">
                Forgot Password?
            </Link>
            {/* sign in button */}
            <CommonBtn
                type="submit"
                className="sm:mt-4 mt-2"
                isLoading={login.isPending}
                disabled={login.isPending}>
                Sign in
            </CommonBtn>

            {error && <ErrorText className={`text-lg text-center`} error={error} />}
        </form>
    )
}

export default SignInForm