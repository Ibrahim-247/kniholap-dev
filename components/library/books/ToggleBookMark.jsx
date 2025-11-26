'use client'

import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
const ToggleBookMark = ({ book = {} }) => {
    const [isBookmark, setIsBookmark] = useState(book.is_bookmark || false);

    return (
        <button onClick={() => setIsBookmark(!isBookmark)} className="lg:size-12 size-8 cursor-pointer bg-secondary text-white rounded shrink-0 flex text-lg justify-center items-center p-1">
            {isBookmark ? (
                <FaBookmark  />
            ) : (
                <FaRegBookmark  />
            )}
        </button>
    );
};

export default ToggleBookMark;
