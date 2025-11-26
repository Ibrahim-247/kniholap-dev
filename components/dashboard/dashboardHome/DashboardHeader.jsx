import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import dummyUserImage from "@/public/dummyUserImage.jpg"

const DashboardHeader = () => {
    return (
        <header className="w-full flex flex-col xs:flex-row items-center justify-between bg-[#A5340C] py-4 px-6 text-white md:gap-8 gap-3">
            {/* Search input with icon */}
            <div className="relative w-full sm:max-w-2xl order-2 sm:order-1">
                <BiSearchAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A5340C] md:size-6 size-5" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-white rounded-full pl-11 pr-6 md:py-2.5 py-1.5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A5340C]/50"
                />
            </div>

            {/* Right-side area (optional icons, profile, etc.) */}
            <div className="flex items-center gap-3 lg:gap-6 order-1 sm:order-2 w-full sm:w-auto justify-between xs:justify-normal">
                {/* notifications icon */}
                <button
                    className="cursor-pointer flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <MdOutlineNotificationsActive
                        className="md:size-6 size-5 text-[#F84E12]"
                    />
                </button>

                {/* user avatar */}
                <div className="md:size-10 size-9 rounded-full cursor-pointer">
                    <Image
                        src={dummyUserImage}
                        alt="user avatar"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
        </header>
    );
};
export default DashboardHeader;