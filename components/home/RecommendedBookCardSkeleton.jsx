'use client'

const RecommendedBookCardSkeleton = ({ isFirstBook = false }) => {
    // Note: main render
    return (
        <>
            {
                isFirstBook ? (
                    <div className="bg-secondary-rgb p-4 rounded-xl h-full flex sm:flex-row flex-col md:gap-4 gap-3 animate-pulse">
                        {/* book cover skeleton */}
                        <div className="sm:w-1/2 w-full relative flex rounded-xl overflow-hidden justify-center h-48 sm:h-full bg-gray-300">
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-400">Loading...</span>
                            </div>
                            <div className="max-w-[90%] w-full text-2xl flex items-center justify-between gap-1 z-10 absolute bottom-5">
                                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                            </div>
                        </div>
                        {/* book details skeleton */}
                        <div className="sm:w-1/2 w-full flex flex-col sm:h-full gap-2 sm:gap-3 md:gap-4">
                            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                            <div className="w-full flex items-center justify-between gap-1">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                                    ))}
                                </div>
                                <div className="h-5 bg-gray-300 rounded w-8"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-300 rounded w-full"></div>
                                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                            </div>
                            <div className="w-full flex flex-wrap gap-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-6 bg-gray-300 rounded-full w-16"></div>
                                ))}
                            </div>
                            <div className="h-10 bg-gray-300 rounded-full w-full"></div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full flex gap-4 flex-col justify-start bg-secondary-rgb p-4 rounded-xl animate-pulse">
                        {/* book cover skeleton */}
                        <div className="w-full shadow-md rounded-2xl overflow-hidden h-48 sm:h-60 shrink-0 relative flex justify-center -mt-16 bg-gray-300">
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-400">Loading...</span>
                            </div>
                            <div className="max-w-[90%] w-full text-2xl flex items-center justify-between gap-1 z-10 absolute bottom-5">
                                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                            </div>
                        </div>
                        {/* book details skeleton */}
                        <div className="w-full flex flex-col justify-between h-full gap-2">
                            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                            <div className="w-full flex items-center justify-between gap-1">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                                    ))}
                                </div>
                                <div className="h-5 bg-gray-300 rounded w-8"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-300 rounded w-full"></div>
                                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                            </div>
                            <div className="w-full flex flex-wrap gap-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-6 bg-gray-300 rounded-full w-16"></div>
                                ))}
                            </div>
                            <div className="h-10 bg-gray-300 rounded-full w-full"></div>
                        </div>
                    </div>
                )
            }
        </>
    )
};
export default RecommendedBookCardSkeleton;