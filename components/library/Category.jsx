"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Category = ({ setFilters, filters }) => {
    const searchParams = useSearchParams();
    const typeQuery = searchParams.get("type");
    const [selected_type, setSelectedTypes] = useState(typeQuery || "all"); 

    const types = [
        { id: "all", name: "All" },
        { id: "ebook", name: "E-Book" },
        { id: "physical", name: "Physical" },
        { id: "premium", name: "Premium" },
    ];
    // Update filters when selectedCategory changes
    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            type: selected_type === "all" ? null : selected_type,
        }));
    }, [selected_type, setFilters]);
    // main render
    return (
        <div className='w-full flex justify-center gap-3 sm:gap-6 items-center flex-wrap'>
            {types.map((type) => (
                <button
                    type="button"
                    key={type.id}
                    onClick={() => setSelectedTypes(type.id)}
                    className={`px-4 py-2 rounded md:rounded-xl flex sm:min-w-[100px] md:min-w-[160px] cursor-pointer justify-center border-black/60 items-center text-sm sm:text-base md:text-lg font-semibold 
                        ${selected_type === type.id ? "bg-primary text-white" : "bg-white text-black"}`}
                >
                    {type.name}
                </button>
            ))}
        </div>
    );
};

export default Category;
