'use client'
import { FaCrown, FaRegBookmark, FaBookmark } from "react-icons/fa6";
import StarRating from "./common/StarRating";
import CommonBtn from "./common/CommonBtn";
import Image from "next/image";
import { useState } from "react";
const RecommendedBookCard = ({ book = {}, isFirstBook = false }) => {
    const {
        id,
        title,
        author,
        cover,
        price,
        rating,
        is_bookmark,
        no_of_reviews,
        description,
        images,
        category = {},
        subcategories = [],
    } = book || {}
    const [isBookmarked, setIsBookmarked] = useState(is_bookmark);
    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };
    // main render
    return (
        <>
            {
                isFirstBook ? (
                    <div className="bg-secondary-rgb p-4 rounded-xl h-full flex sm:flex-row flex-col md:gap-4 gap-3">
                        {/* book cover */}
                        <div className="sm:w-1/2 w-full relative flex rounded-xl overflow-hidden justify-center h-48  sm:h-full">
                            <Image
                                src={cover}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            <div className="max-w-[90%] w-full text-2xl flex items-center justify-between gap-1 z-10 absolute bottom-5">
                                {category.name === "Premium" && (
                                    <FaCrown className="text-2xl text-yellow-500" />
                                )}
                                <button
                                    className="self-end cursor-pointer"
                                    type="button"
                                    onClick={handleBookmark}
                                >
                                    {isBookmarked ? (
                                        <FaBookmark className="text-dark" />
                                    ) : (
                                        <FaRegBookmark />
                                    )}
                                </button>
                            </div>
                        </div>
                        {/* book details */}
                        <div className="sm:w-1/2 w-full flex flex-col sm:h-full gap-2 sm:gap-3 md:gap-4">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-medium">{title}</h3>
                            <p className="sm:text-lg text-base">Author: {author}</p>
                            <div className="w-full flex items-center justify-between gap-1">
                                <StarRating rating={rating} />
                                <span className="font-medium text-sm sm:text-xl">{Number(rating).toFixed(1)}</span>
                            </div>
                            <p className="sm:text-base text-sm sm:h-full line-clamp-3 md:line-clamp-8">{description}</p>
                            <div className="w-full flex  flex-wrap gap-2">
                                {subcategories.map((category, index) => (
                                    <span className="border flex sm:text-base text-xs capitalize font-medium justify-center items-center px-2 sm:px-5 py-1 sm:py-2 rounded-full" key={category.id}>
                                        {category.name}
                                    </span>
                                ))}
                            </div>
                            <CommonBtn className={`rounded-full bg-black text-white capitalize`} link={true} path={`/`}>
                                Read Now
                            </CommonBtn>
                        </div>
                    </div>
                ) : (
                    <div className="w-full flex gap-4 flex-col justify-start bg-secondary-rgb p-4 rounded-xl">
                        {/* book cover */}
                        <div className="w-full shadow-md rounded-2xl overflow-hidden h-48 sm:h-60 shrink-0 relative flex justify-center -mt-16">
                            <Image
                                src={cover}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            <div className="max-w-[90%] w-full text-2xl flex items-center justify-between gap-1 z-10 absolute bottom-5">
                                {category.name === "Premium" && (
                                    <FaCrown className="text-2xl text-yellow-500" />
                                )}
                                <button
                                    className="self-end cursor-pointer"
                                    type="button"
                                    onClick={handleBookmark}
                                >
                                    {isBookmarked ? (
                                        <FaBookmark className="text-dark" />
                                    ) : (
                                        <FaRegBookmark />
                                    )}
                                </button>
                            </div>
                        </div>
                        {/* book details */}
                        <div className="w-full flex flex-col justify-between h-full gap-2">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-medium">{title}</h3>
                            <p className="sm:text-lg text-base">Author: {author}</p>
                            <div className="w-full flex items-center justify-between gap-1">
                                <StarRating rating={rating} />
                                <span className="font-medium text-sm sm:text-xl">{Number(rating).toFixed(1)}</span>
                            </div>
                            <p className="sm:text-base text-sm line-clamp-3">{description}</p>
                            <div className="w-full flex  flex-wrap gap-2">
                                {subcategories.map((category, index) => (
                                    <span className="border flex sm:text-base text-xs capitalize font-medium justify-center items-center px-2 sm:px-5 py-1 sm:py-2 rounded-full" key={category.id}>
                                        {category.name}
                                    </span>
                                ))}
                            </div>
                            <CommonBtn className={`rounded-full bg-black text-white capitalize`} link={true} path={`/`}>
                                Read Now
                            </CommonBtn>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default RecommendedBookCard