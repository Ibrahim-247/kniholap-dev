import SignUpForm from "@/components/auth/SignUpForm"
import SectionTitle from "@/components/common/SectionTitle"
import Link from "next/link"

const SignUp = () => {
    return (
        <div className="w-full flex flex-col justify-start gap-6 items-center">
            {/* sign in header */}
            <div className="flex flex-col sm:gap-3 gap-2 justify-start items-center">
                <SectionTitle className={'lg:text-5xl text-2xl'} text="Sign Up Now" />
                <p>
                    Already have an account?
                    <Link className="text-primary underline ml-1" href="/auth">Sign In</Link>
                </p>
            </div>
            {/* sign in form */}
            <SignUpForm />
        </div>
    )
}

export default SignUp