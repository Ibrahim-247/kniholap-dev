"use client";
import { cn } from "@/lib/utils";
import bell from "@/public/icons/bell.png"
const Notifications = ({className}) => {
    return (
        <button title="Notification" className={cn("size-10 flex items-center cursor-pointer justify-center p-2 bg-primary rounded-lg shrink-0", className)}>
            <img className="w-full h-full object-contain" src={bell.src} alt="globe" />
        </button>
    )
}

export default Notifications