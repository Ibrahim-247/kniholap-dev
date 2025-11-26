"use client";
import CommonDashboardTitle from "@/components/common/CommonDashboardTitle";
import { FaPlus } from "react-icons/fa";

const EarningsTitle = () => {
    return (
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            {/* left side */}
            <CommonDashboardTitle
                text="Earnings"
            />

            {/* right side */}
            <button
                className="cursor-pointer flex items-center gap-2 p-3 rounded-full bg-[#7C2709] text-white hover:bg-white hover:text-black hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out w-full sm:w-auto justify-center"
            >
                Withdraw Earnings
            </button>
        </div>
    );
};
export default EarningsTitle;