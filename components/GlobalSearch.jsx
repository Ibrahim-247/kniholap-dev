"use client";
import { cn } from "@/lib/utils";
import search from "@/public/icons/search.png"
const GlobalSearch = ({ className }) => {
    return (
        <button title="Search" className={cn("size-10 flex items-center cursor-pointer justify-center p-2 bg-primary rounded-lg shrink-0", className)}>
            <img className="w-full h-full object-contain" src={search.src} alt="globe" />
        </button>
    )
}

export default GlobalSearch