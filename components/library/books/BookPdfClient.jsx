'use client';
import dynamic from 'next/dynamic';
// Import a custom Loader component to show while the PDF viewer is loading
import Loader from '@/components/common/Loader';

// Dynamically import BookPdfViewInternal and disable SSR
const BookPdfView = dynamic(
    () => import('./BookPdfView'), // Path to your component file
    {
        ssr: false,
        loading: () => <Loader text="Loading PDF Viewer..." /> // Optional loading state
    }
);
const BookPdfClient = ({ book = {} }) => {
    return (
        <BookPdfView book={book} />
    )
}

export default BookPdfClient