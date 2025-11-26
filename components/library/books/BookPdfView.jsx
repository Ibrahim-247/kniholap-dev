'use client';

import Loader from '@/components/common/Loader';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// 1. Import the necessary icons
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Essential setup for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function BookPdfViewInternal({ book }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0); // Default scale

    // Handler for successful document load
    function onLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // --- Page Navigation Functions ---

    // Function to go to the previous page
    const goToPrevPage = () => {
        setPageNumber(prevPageNumber => (prevPageNumber > 1 ? prevPageNumber - 1 : 1));
    };

    // Function to go to the next page
    const goToNextPage = () => {
        setPageNumber(prevPageNumber => (prevPageNumber < numPages ? prevPageNumber + 1 : numPages));
    };

    // --- Zoom Functions ---
    const zoomIn = () => {
        // Increase scale by 0.1, up to a max of 3.0 (or your preferred limit)
        setScale(prevScale => Math.min(prevScale + 0.1, 3.0));
    };

    const zoomOut = () => {
        // Decrease scale by 0.1, down to a min of 0.5 (or your preferred limit)
        setScale(prevScale => Math.max(prevScale - 0.1, 0.5));
    };
    // main render
    return (
        <div className="w-full flex flex-col lg:mt-10 items-center">
            {/* all controls */}
            <div className="flex shadow-md self-end justify-end items-center gap-3 px-2 sm:px-3 py-3 ">
                {/* Zoom Control Group */}
                <div className="flex gap-2 items-center">
                    <button
                        onClick={zoomOut}
                        disabled={scale <= 0.5}
                        className="p-1 cursor-pointer rounded-full text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {/* 2. Zoom Out Icon */}
                        <FiZoomOut className="w-5 h-5" />
                    </button>
                    <p className="text-gray-700 font-semibold text-xs sm:text-sm  text-center">
                        {(scale * 100).toFixed(0)}%
                    </p>
                    <button
                        onClick={zoomIn}
                        disabled={scale >= 3.0}
                        // Added classes for styling and disabling effect
                        className="p-1 rounded-full cursor-pointer text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {/* 2. Zoom In Icon */}
                        <FiZoomIn className="w-5 h-5" />
                    </button>
                </div>

                <div className="sm:mx-4 mx-1 h-6 border-l border-gray-300"></div> {/* Separator */}

                {/* Page Navigation Control Group */}
                <div className="flex gap-1 sm:gap-2 items-center">
                    <button
                        onClick={goToPrevPage}
                        disabled={pageNumber === 1}
                        // Added classes for styling and disabling effect
                        className="p-1 rounded-full cursor-pointer text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {/* 2. Previous Page Icon */}
                        <IoIosArrowBack className="w-5 h-5" />
                    </button>
                    <p className="text-gray-700 font-semibold text-xs sm:text-sm  text-center">
                        Page {pageNumber} of {numPages}
                    </p>
                    <button
                        onClick={goToNextPage}
                        disabled={pageNumber === numPages}
                        // Added classes for styling and disabling effect
                        className="p-1 rounded-full cursor-pointer text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {/* 2. Next Page Icon */}
                        <IoIosArrowForward className="w-5 h-5" />
                    </button>
                </div>
            </div>
            {/* PDF Document Viewer */}
            <div className="w-full flex justify-center items-center overflow-auto max-h-[100vh] mt-4">
                <Document
                    file={book?.pdf_file}
                    onLoadSuccess={onLoadSuccess}
                    className="flex justify-center w-3xl " // Center the page within the container
                    loading={
                        <Loader />
                    }
                >
                    {/* Render the current page with the scale prop */}
                    <Page
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        renderMode='canvas'
                        scale={scale} // <-- Apply the scale here
                        key={pageNumber}
                        pageNumber={pageNumber}
                    />
                </Document>
            </div>
        </div>
    );
}