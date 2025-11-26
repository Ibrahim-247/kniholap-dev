// app/book/[slug]/loading.jsx
export default function Loading() {
    return (
        <div className="container flex flex-col md:flex-row gap-3 sm:gap-5 xl:gap-10 animate-pulse">
            {/* Left: Image Gallery (Swiper + Thumbs) */}
            <div className="w-full md:w-[45%] flex flex-col gap-3">
                {/* Main Image */}
                <div className="rounded-lg border-2 border-gray-300 h-60 xs:h-72 sm:h-96 md:h-72 lg:h-[350px] xl:h-[450px] w-full bg-gray-300"></div>

                {/* Thumbnail Swiper */}
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 py-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-20 lg:h-24 rounded-lg bg-gray-300 border border-gray-400"
                        ></div>
                    ))}
                </div>
            </div>

            {/* Right: Book Details */}
            <div className="w-full md:w-[55%] flex flex-col gap-4 xl:gap-6">
                {/* Title */}
                <div className="space-y-3">
                    <div className="h-8 sm:h-10 xl:h-12 w-4/5 bg-gray-300 rounded-lg"></div>
                    <div className="h-8 sm:h-10 xl:h-12 w-3/5 bg-gray-300 rounded-lg"></div>
                </div>

                <div className="space-y-4 lg:space-y-6">
                    {/* Author */}
                    <div className="h-6 w-48 bg-gray-300 rounded"></div>

                    {/* Rating */}
                    <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-5 h-5 bg-gray-300 rounded-full"></div>
                            ))}
                        </div>
                        <div className="h-5 w-32 bg-gray-300 rounded"></div>
                    </div>

                    {/* Categories Title + Pills */}
                    <div className="space-y-3">
                        <div className="h-6 w-40 bg-gray-300 rounded"></div>
                        <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-9 w-24 sm:w-28 bg-gray-300 rounded-full"
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                        <div className="h-6 w-44 bg-gray-300 rounded"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-11/12"></div>
                            <div className="h-4 bg-gray-300 rounded w-10/12"></div>
                        </div>
                    </div>

                    {/* Action Button (Read Now / Download) */}
                    <div className="mt-4 xl:mt-6">
                        <div className="h-14 w-full bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}