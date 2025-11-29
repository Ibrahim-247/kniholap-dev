"use client";

import { useEffect, useState } from "react";

const Description = ({ book = {} }) => {
    const [sanitizedHTML, setSanitizedHTML] = useState("");

    useEffect(() => {
        // Only runs in the browser if DOM exists
        import("dompurify")
            .then((DOMPurify) => {
                if (book?.description) {
                    setSanitizedHTML(DOMPurify.default.sanitize(book.description));
                }
            })
            .catch(() => setSanitizedHTML(book?.description || ""));
    }, [book?.description]);

    if (!book?.description) {
        return (
            <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-lg sm:text-xl font-bold">Book Description</p>
                <p className="text-justify text-sm sm:text-base xl:text-xl text-gray-700 italic">
                    No description available
                </p>
            </div>
        );
    }
    return (
        <div className="flex flex-col gap-1 sm:gap-2">
            <p className="text-lg sm:text-xl font-bold">Book Description</p>
            <div
                className="text-justify text-sm sm:text-base xl:text-xl text-gray-700 prose prose-sm sm:prose-base max-w-none
                 line-clamp-3 sm:line-clamp-4 hover:line-clamp-none transition-all duration-300"
                dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            />
        </div>
    );
};
export default Description;