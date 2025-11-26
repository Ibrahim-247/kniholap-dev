"use client"
import { FcGoogle } from "react-icons/fc";
const GoogleLogin = () => {

    const signInWithGoogle = () => {

    }


    // main render
    return (
        <button type="button" onClick={signInWithGoogle} className="w-full cursor-pointer rounded-full py-4 px-3 bg-[#DADAD1] flex items-center justify-center gap-1">
            <FcGoogle size={20} />
            <span>Sign In with Google</span>
        </button>
    )
}

export default GoogleLogin