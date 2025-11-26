"use client";

import StarRating from "../common/StarRating";

const TestimonyCard = ({ testimony = {} }) => {
    const {
        id,
        name,
        rating,
        avatar,
        review
    } = testimony || {};

    return (
        <div className="w-full max-w-xs sm:max-w-sm mx-3 bg-white shadow-lg rounded-2xl p-3 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Avatar */}
            <div className="sm:size-20 size-14 rounded-full overflow-hidden border-2 sm:border-4 border-primary mb-4">
                <img src={avatar} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Name */}
            <h3 className="sm:text-xl text-lg font-semibold text-gray-800">{name}</h3>

            {/* Rating */}
            <div className="sm:mt-2 mt-1 flex items-center justify-center gap-2">
                <StarRating rating={rating} />
                <span className="text-lg font-medium text-yellow-600">
                    {rating.toFixed(1)}
                </span>
            </div>

            {/* Review Text */}
            <p className="sm:mt-4 mt-2 text-gray-600 text-sm leading-relaxed italic">
                “{review.length > 120 ? review.slice(0, 120) + "..." : review}”
            </p>
        </div>
    );
};

export default TestimonyCard;
