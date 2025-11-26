"use client";

const BookListCardSkeleton = () => {
    return (
        <div className="w-full p-4 lg:p-6 shadow-lg rounded-3xl bg-white flex flex-col gap-4 lg:gap-6 animate-pulse">
            {/* Book Header Skeleton */}
            <div className="flex flex-col gap-4 lg:gap-6">
                {/* Cover Image Skeleton */}
                <div className="w-full h-[200px] sm:h-[180px] lg:h-[200px] xl:h-[220px] rounded-xl overflow-hidden bg-gray-300 flex items-center justify-center">
                    <div className="text-gray-400 text-center p-4">
                        <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                        <div className="w-20 h-3 bg-gray-400 rounded mx-auto"></div>
                    </div>
                </div>

                {/* Book Details Skeleton */}
                <div className="flex-1 flex flex-col gap-3">
                    {/* Title and Author Skeleton */}
                    <div className="w-full">
                        <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                    </div>

                    {/* Rating and Status Skeleton */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-5 h-5 bg-gray-300 rounded"></div>
                                ))}
                            </div>
                            <div className="w-8 h-5 bg-gray-300 rounded"></div>
                            <div className="w-16 h-4 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-20 h-6 bg-gray-300 rounded-lg"></div>
                    </div>

                    {/* Price Information Skeleton */}
                    <div className="flex items-center gap-3">
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                        <div className="w-12 h-6 bg-gray-300 rounded"></div>
                        <div className="w-20 h-5 bg-gray-300 rounded"></div>
                    </div>

                    {/* Stock and Condition Skeleton */}
                    <div className="flex flex-wrap gap-4">
                        <div className="w-24 h-4 bg-gray-300 rounded"></div>
                        <div className="w-28 h-4 bg-gray-300 rounded"></div>
                        <div className="w-20 h-4 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Additional Information Skeleton */}
            <div className="text-sm space-y-3">
                <div className="w-48 h-4 bg-gray-300 rounded"></div>
                <div className="w-40 h-4 bg-gray-300 rounded"></div>
                <div className="w-36 h-4 bg-gray-300 rounded"></div>
            </div>

            {/* Description Skeleton */}
            <div className="text-sm space-y-2">
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
                <div className="w-full h-3 bg-gray-300 rounded"></div>
                <div className="w-4/5 h-3 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-3 lg:gap-6 pt-2 border-t border-gray-200">
                <div className="w-full sm:w-1/2 h-12 bg-gray-300 rounded-xl"></div>
                <div className="w-full sm:w-1/2 h-12 bg-gray-300 rounded-xl"></div>
            </div>
        </div>
    );
};

export default BookListCardSkeleton;