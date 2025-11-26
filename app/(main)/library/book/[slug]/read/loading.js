// app/book/[slug]/loading.jsx
export default function Loading() {
    return (
        <div className="container flex flex-col gap-2 sm:gap-4 md:gap-6 justify-start animate-pulse">
            {/* Section Title */}
            <div className="h-4 w-32 bg-gray-300 rounded-lg"></div>
            {/* Book Cover */}
            <div className="w-full bg-primary-rgb py-5 lg:py-10 px-3 sm:px-5 h-64 sm:h-80 md:h-[450px] lg:h-[500px] xl:h-[650px] rounded-2xl sm:rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-gray-300 rounded-2xl"></div>
            </div>
            {/* Book Info */}
            <div className="w-full flex flex-col gap-4 lg:gap-10">
                {/* Title */}
                <div className="space-y-3">
                    <div className="h-8 sm:h-10 xl:h-12 w-4/5 bg-gray-300 rounded-lg"></div>
                    <div className="h-8 sm:h-10 xl:h-12 w-3/5 bg-gray-300 rounded-lg"></div>
                </div>

                {/* Author + Actions + Rating Row */}
                <div className="flex flex-col xl:flex-row justify-between gap-6">
                    <div className="flex-1 space-y-4">
                        {/* Author */}
                        <div className="h-6 w-48 bg-gray-300 rounded"></div>

                        {/* Review + Complete Buttons */}
                        <div className="flex gap-4">
                            <div className="h-10 w-32 bg-gray-300 rounded-full"></div>
                            <div className="h-10 w-40 bg-gray-300 rounded-full"></div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-3">
                            <span className="h-5 w-16 bg-gray-300 rounded"></span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-5 h-5 bg-gray-300 rounded-full"></div>
                                ))}
                            </div>
                            <div className="h-5 w-24 bg-gray-300 rounded"></div>
                        </div>
                    </div>

                    {/* Download + Bookmark */}
                    <div className="flex gap-6 items-center justify-end">
                        <div className="lg:size-12 size-10 bg-gray-400 rounded-lg"></div>
                        <div className="lg:size-12 size-10 bg-gray-400 rounded-lg"></div>
                    </div>
                </div>

                {/* PDF Viewer Area */}
                <div className="mt-8">
                    <div className="h-96 sm:h-[600px] lg:h-[800px] bg-gray-200 border-2 border-dashed border-gray-300 rounded-xl"></div>
                    <div className="mt-4 flex justify-center gap-4">
                        <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}