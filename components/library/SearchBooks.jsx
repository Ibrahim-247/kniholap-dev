"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "react-haiku";

const SearchBooks = ({ filters, setFilters }) => {
    const [value, setValue] = useState(filters.search || ""); // Local state
    const debouncedValue = useDebounce(value, 1000); // 1 second debounce
    // Update global filters when debounced value changes
    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            search: debouncedValue || ""
        }));
    }, [debouncedValue, setFilters]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <input
            type="search"
            placeholder="Books by title/author"
            onChange={handleChange}
            value={value}
            className="w-full rounded-full outline-none border-none bg-[rgba(217,217,217,0.50)] py-3 md:py-5 px-4 md:px-9"
        />
    );
};

export default SearchBooks;
