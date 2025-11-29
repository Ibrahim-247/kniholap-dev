"use client";
import { useQuery } from "@tanstack/react-query";
import BookListCard from "./BookListCard";
import { axiosPrivateClient } from "@/lib/axios.private.client";
import BookListCardSkeleton from "../BookListCardSkeleton";

const DashboardBooksList = () => {
    const axiosInstance = axiosPrivateClient();

    // Note: get all books list data from api
    const {
        data: getAllBooksListData,
        isLoading: isGetAllBooksListDataLoading
    } = useQuery({
        queryKey: ["gettAllBooksListData"],
        queryFn: async () => {
            const response = await axiosInstance.get("/auth/seller/book/list");
            return response?.data?.data || [];
        }
    });

    // Note: main ui component
    return (
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mt-4 xl:mt-8">
            {isGetAllBooksListDataLoading ? (
                Array.from({ length: 8 }).map((_, index) => (
                    <BookListCardSkeleton key={index} />
                ))
            ) : (
                !getAllBooksListData || getAllBooksListData.length === 0 ? (
                    <div className="col-span-full text-center py-8">
                        <p className="text-gray-500 text-lg">No books found.</p>
                    </div>
                ) : (
                    getAllBooksListData.map((book) => (
                        <BookListCard
                            key={book?.id || book?.bookId}
                            book={book}
                        />
                    ))
                )
            )}
        </div>
    );
};
export default DashboardBooksList;