"use client"
import DOMPurify from "dompurify";
const Description = ({ book = {} }) => {
    return (
        <div className="flex flex-col gap-1 sm:gap-2">
            <p className="text-lg sm:text-xl font-bold">Book Description</p>
            {book?.description ? (
                <div
                    className="text-justify text-sm sm:text-base xl:text-xl text-gray-700 prose prose-sm sm:prose-base max-w-none
                 line-clamp-3 sm:line-clamp-4 hover:line-clamp-none transition-all duration-300"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(book?.description),
                    }}
                />
            ) : (
                <p className="text-justify text-sm sm:text-base xl:text-xl text-gray-700 italic">
                    No description available
                </p>
            )}
        </div>
    )
};
export default Description;