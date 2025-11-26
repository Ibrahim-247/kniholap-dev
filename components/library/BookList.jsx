'use client';

import { useState } from 'react';
import CustomPagination from '../common/CustomPagination';
import BookCard from '../BookCard';
import Categories from './Categories';
import BookCardSkeleton from '../BookCardSkeleton';
import useBooks from '@/hooks/books.hook';
import ErrorState from '../common/ErrorState';
import EmptyState from '../common/EmptyState.';

const BookList = ({ filters, setFilters }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(4);

    const {
        books,
        pagination,
        isLoading,
        isFetching,
        isError,
    } = useBooks({ filters, currentPage, perPage });

    const handlePageClick = (page, pageSize) => {
        setCurrentPage(page);
        setPerPage(pageSize);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full flex flex-col gap-4 lg:gap-10 mt-2 md:mt-6 justify-start">
            <Categories filters={filters} setFilters={setFilters} />
            {/* Loading */}
            {(isLoading || isFetching) ? (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {Array.from({ length: perPage }).map((_, i) => (
                        <BookCardSkeleton key={i} />
                    ))}
                </div>
            ) : isError ? (
                <ErrorState />
            ) : books?.length === 0 ? (
                <EmptyState
                    className="py-20"
                    description="No books found with these filters or no books available"
                />
            ) : (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {books?.map((book) => (
                        <BookCard book={book} key={book.id} />
                    ))}
                </div>
            )}
            {/* Pagination */}
            {pagination?.last_page > 1 && !isError && !isLoading && !isFetching && (
                <CustomPagination
                    handlePageClick={handlePageClick}
                    perPage={pagination.per_page || 4}
                    totalItem={pagination.total || 0}
                    currentPage={pagination.current_page || 1}
                    className=""
                    showSizeChanger={true}
                />
            )}
        </div>
    );
};

export default BookList;