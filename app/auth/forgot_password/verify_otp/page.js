import VerifyResetForm from "@/components/auth/VerifyResetForm"
import SectionTitle from "@/components/common/SectionTitle"
import { FaLock } from "react-icons/fa";
const VerifyOtp = () => {
    return (
        <div className="w-full flex flex-col justify-start gap-6 items-center">
            {/* forgot password  header */}
            <div className="flex flex-col gap-3 justify-start items-center">
                <SectionTitle className={'lg:text-5xl text-2xl'} text="Verify OTP" />
                <div className="size-14 bg-primary text-white flex justify-center items-center p-1 rounded-full">
                    <FaLock size={24} />
                </div>
            </div>
            {/* forgot password form */}
            <VerifyResetForm />
        </div>
    )
}

export default VerifyOtp