'use client'

import { books } from "@/data";
import BookCard from "../BookCard";
import CustomPagination from "../common/CustomPagination";
import SectionTitle from "../common/SectionTitle"

const SimilarYouEnjoyed = ({ book_category = "all" }) => {
    const handlePageClick = (page) => {
        // window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Show only 10 dummy books
    const limitedBooks = books.slice(0, 4);

    return (
        <div className="w-full flex flex-col gap-3 lg:gap-6 justify-start">
            <SectionTitle  text="Similar to books you’ve enjoyed" />
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

export default SimilarYouEnjoyed