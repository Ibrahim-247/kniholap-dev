import AuthSlider from "@/components/auth/AuthSlider";
import Logo from "@/components/common/Logo";

const AuthLayout = ({ children }) => {
    return (
        <div className="w-full lg:h-screen min-h-screen p-3 xl:p-6 flex gap-6 xl:gap-8 items-center justify-center">
            {/* left */}
            <div className="w-1/2 hidden lg:block h-full">
                <AuthSlider />
            </div>
            {/* right */}
            <div className="lg:w-1/2 w-full h-full bg-[rgba(233,233,227,0.60)] px-6 sm:px-10  py-10 lg:px-4 xl:px-8 rounded-2xl flex flex-col items-center justify-center gap-6">
                <Logo />
                <div className="w-full px-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthLayout