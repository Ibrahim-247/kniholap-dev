import CommonBtn from '@/components/common/CommonBtn'
import SectionTitle from '@/components/common/SectionTitle'
import Tick from '@/components/icons/Tick'


const PasswordChanged = () => {
    return (
        <div className="w-full flex flex-col justify-center gap-6 items-center">
            <Tick />
            <SectionTitle className={`text-center text-xl lg:text-3xl`} text="Your password has changed successfully" />
            <p>You can now login with your new password</p>
            <CommonBtn link={true} path='/auth'>Back to sign in</CommonBtn>
        </div>
    )
}

export default PasswordChanged