'use client'

import BookCard from "@/components/BookCard";
import CustomPagination from "@/components/common/CustomPagination";
import SectionTitle from "@/components/common/SectionTitle";
import { books } from "@/data";

const RelatedBooks = () => {
    const handlePageClick = (page) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // Show only 10 dummy books
    const limitedBooks = books.slice(0, 4);
    // main render
    return (
        <div className="w-full flex flex-col gap-3 md:gap-6 justify-start">
            <SectionTitle className={`text-2xl font-secondary`} text="Related Books" />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    limitedBooks.map((book) => (
                        <BookCard book={book} key={book.id} />
                    ))
                }
            </div>
            <CustomPagination
                handlePageClick={handlePageClick}
                perPage={10}
                totalItem={books.length}
                currentPage={1}
                className=""
                showSizeChanger={true}
            />
        </div>
    )
}

export default RelatedBooks