"use client";
import Link from "next/link";
import CommonDashboardTitle from "../../common/CommonDashboardTitle";
import { FaPlus } from "react-icons/fa6";

const DashboardTitle = () => {
    return (
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            {/* left side */}
            <div className="flex flex-col gap-1 lg:gap-3">
                <CommonDashboardTitle
                    text="Dashboard"
                />
                <p className="text-base text-[rgba(0,0,0,0.60)]">Welcome back! Here's your store overview.</p>
            </div>

            {/* right side */}
            <Link
                href="/dashboard/add-new-book"
                className="cursor-pointer flex items-center gap-2 p-3 rounded-full bg-[#7C2709] text-white hover:bg-white hover:text-black hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out w-full sm:w-auto justify-center"
            >
                <FaPlus className="size-6" />
                <span className="sm:inline">Add a New Book</span>
            </Link>
        </div>
    );
};
export default DashboardTitle;