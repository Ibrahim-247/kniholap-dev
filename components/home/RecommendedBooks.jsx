import { books } from "@/data";
import SectionTitle from "../common/SectionTitle";
import RecommendedBookCard from "../RecommendedBookCard";
const RecommendedBooks = () => {
    const firstBook = books[2];
    const othersBook = books.slice(0, 6);
    // main render
    return (
        <section className="container grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-20">
            {/* first book */}
            <div className="w-full sm:col-span-2 flex flex-col gap-4 lg:gap-10">
                <SectionTitle text="Recommended for you" />
                <RecommendedBookCard book={firstBook} isFirstBook={true} />
            </div>
            {/* other books */}
            {othersBook.map((book, index) => (
                <RecommendedBookCard key={book.id} book={book} isFirstBook={false} />
            ))}
        </section>
    )
}

export default RecommendedBooks