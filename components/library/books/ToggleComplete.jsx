'use client'

import { useState } from "react";

const ToggleComplete = ({ book = {} }) => {
    const [isComplete, setIsComplete] = useState(book.is_complete || false);

    return (
        <button
            type="button"
            onClick={() => setIsComplete(!isComplete)}
            className={`${isComplete ? "bg-primary" : "bg-secondary"
                } text-white capitalize rounded-sm py-2 lg:py-3 px-2 cursor-pointer shrink-0 text-sm lg:text-base lg:px-10`}
        >
            {isComplete ? "Mark Incomplete" : "Mark Complete"}
        </button>
    );
};

export default ToggleComplete;
