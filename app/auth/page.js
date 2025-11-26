import GoogleLogin from "@/components/auth/GoogleLogin"
import SignInForm from "@/components/auth/SignInForm"
import SectionTitle from "@/components/common/SectionTitle"
import Link from "next/link"

const SignIn = () => {

    // main render
    return (
        <div className="w-full flex flex-col justify-start gap-6 items-center">
            {/* sign in header */}
            <div className="flex flex-col gap-3 justify-start items-center">
                <SectionTitle className={'lg:text-5xl text-2xl'} text="Welcome Back" />
                <p>
                    Don&lsquo;t have an account?
                    <Link className="text-primary underline ml-1" href="/auth/signup">Sign Up</Link>
                </p>
            </div>
            {/* google login */}
            <GoogleLogin />
            <p>Or Continue with</p>
            {/* sign in form */}
            <SignInForm />
        </div>
    )
}

export default SignIn