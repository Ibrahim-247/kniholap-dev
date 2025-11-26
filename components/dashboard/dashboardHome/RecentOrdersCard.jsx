"use client";
import Image from "next/image";

const RecentOrdersCard = ({ item }) => {

    const { id, title, orderId, status, image } = item;

    // Note: main ui component
    return (
        <div className="w-full flex flex-col gap-6 bg-white p-4 xl:p-6 rounded-3xl">
            {/* image */}
            <div className="w-full h-full">
                <Image
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* name and status */}
            <div className="w-full flex flex-col gap-3">
                <h3 className="text-xl text-[#0A0910]">{title}</h3>

                {/* status and order id */}
                <div className="flex items-center justify-between">
                    <p className="text-base text-[#0A0910]">Status: {status}</p>
                    <p className="text-base text-[#0A0910]">Order: {orderId}</p>
                </div>
            </div>

            {/* status button */}
            <button
                className="cursor-pointer w-full text-[#F5F5F9] text-base md:font-medium bg-[#7C2709] rounded-lg py-1 border border-[#7C2709] hover:bg-transparent hover:text-[#7C2709] hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
            >
                Ship Now
            </button>
        </div>
    );
};
export default RecentOrdersCard;