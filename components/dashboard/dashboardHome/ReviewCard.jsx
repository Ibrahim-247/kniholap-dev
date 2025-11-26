import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { name, rating, avatar, review: comment } = review;

    // Note: main ui component
    return (
        <div className="w-full bg-[#7C2709] text-white rounded-lg p-4 flex flex-col gap-3">
            {/* Reviewer Info */}
            <div className="w-full flex items-center gap-3">
                <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                {/* Name and Rating information */}
                <div className="w-full">
                    <h3 className="font-semibold text-base">{name}</h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                                key={i}
                                className={
                                    i < Math.round(rating) ? "opacity-100" : "opacity-30"
                                }
                            />
                        ))}
                        <span className="text-sm text-white ml-1">{rating?.toFixed(1)}</span>
                    </div>
                </div>
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-100 leading-relaxed">{comment}</p>
        </div>
    );
};
export default ReviewCard;