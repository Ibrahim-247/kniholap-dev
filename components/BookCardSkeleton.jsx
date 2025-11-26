const BookCardSkeleton = () => {
    return (
        <div className="w-full p-4 md:p-6 rounded-3xl border flex flex-col justify-start gap-4 border-black/20 animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-52 xs:h-56 sm:h-60 rounded-lg overflow-hidden bg-gray-300"></div>

            <div className="w-full flex flex-col gap-2">
                {/* Title */}
                <div className="h-5 md:h-6 w-3/4 bg-gray-300 rounded"></div>

                {/* Author */}
                <div className="h-4 md:h-5 w-1/2 bg-gray-300 rounded"></div>

                {/* Rating row */}
                <div className="flex items-center justify-between">
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    <div className="h-4 w-8 bg-gray-300 rounded"></div>
                </div>

                {/* Reviews */}
                <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
            </div>

            {/* Button skeleton */}
            <div className="w-full h-[50px] bg-gray-300 rounded-xl"></div>
        </div>
    );
};

export default BookCardSkeleton;
