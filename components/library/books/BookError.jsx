import Link from "next/link";

const BookError = () => {
    return (
        <div className="container flex flex-col items-center justify-center text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <p className="mb-6">We couldn't load the book details. Please try again.</p>
            <Link
                href="/library"
                className="px-6 py-3 bg-primary text-white rounded-lg"
            >
                Go Back
            </Link>
        </div>
    );
};

export default BookError;
