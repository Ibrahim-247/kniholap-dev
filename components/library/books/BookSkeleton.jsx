const BookSkeleton = () => {
    return (
        <div className="container animate-pulse flex flex-col gap-6">
            <div className="h-8 w-40 bg-gray-300 rounded"></div>

            {/* cover */}
            <div className="w-full h-[450px] bg-gray-300 rounded-3xl"></div>

            {/* title */}
            <div className="h-6 w-2/3 bg-gray-300 rounded"></div>

            {/* author + rating */}
            <div className="flex flex-col gap-4">
                <div className="h-5 w-1/3 bg-gray-300 rounded"></div>

                <div className="flex gap-4">
                    <div className="h-5 w-20 bg-gray-300 rounded"></div>
                    <div className="h-5 w-20 bg-gray-300 rounded"></div>
                    <div className="h-5 w-24 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* buttons */}
            <div className="flex gap-4">
                <div className="h-10 w-28 bg-gray-300 rounded"></div>
                <div className="h-10 w-28 bg-gray-300 rounded"></div>
            </div>

            {/* pdf viewer */}
            <div className="w-full h-[600px] bg-gray-300 rounded-xl"></div>
        </div>
    );
};

export default BookSkeleton;
