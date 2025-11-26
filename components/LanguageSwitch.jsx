"use client";
import { cn } from "@/lib/utils";
import globe from "@/public/icons/globe.png"
const LanguageSwitch = ({ className }) => {
    return (
        <button title="Language" className={cn("size-10 flex items-center cursor-pointer justify-center p-2 bg-primary rounded-lg shrink-0", className)}>
            <img className="w-full h-full object-contain" src={globe.src} alt="globe" />
        </button>
    )
}

export default LanguageSwitch