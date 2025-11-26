import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm"
import SectionTitle from "@/components/common/SectionTitle"

const ForgotPassword = () => {
    return (
        <div className="w-full flex flex-col justify-start gap-6 items-center">
            {/* forgot password  header */}
            <SectionTitle className={'lg:text-5xl text-2xl'} text="Forgot Password" />
            {/* forgot password form */}
            <ForgotPasswordForm />
        </div>
    )
}

export default ForgotPassword