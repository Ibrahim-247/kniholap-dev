import ResetPasswordForm from "@/components/auth/ResetPasswordForm"
import SectionTitle from "@/components/common/SectionTitle"

const ResetNewPassword = () => {
    return (
        <div className="w-full flex flex-col justify-start gap-6 items-center">
            {/* sign in header */}
            <div className="flex flex-col gap-3 justify-start items-center">
                <SectionTitle className={'lg:text-5xl text-2xl'} text="Reset Password" />
                <p>
                    Please enter your details below
                </p>
            </div>
            {/* sign in form */}
            <ResetPasswordForm />
        </div>
    )
}

export default ResetNewPassword