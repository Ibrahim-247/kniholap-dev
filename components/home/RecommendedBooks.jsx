"use client";
import { books } from "@/data";
import SectionTitle from "../common/SectionTitle";
import RecommendedBookCard from "../RecommendedBookCard";
import { useQuery } from "@tanstack/react-query";
import { axiosPrivateClient } from "@/lib/axios.private.client";
const RecommendedBooks = () => {
    const firstBook = books[2];
    const othersBook = books.slice(0, 6);
    const axiosInstance = axiosPrivateClient();

    // Note: Get all recommended books
    const { data: getAllRecommendedBooks, isLoading, isError } = useQuery({
        queryKey: ["getAllRecommendedBooks"],
        queryFn: async () => {
            const response = await axiosInstance.get(`/recommended/book/list`);
            return response?.data?.data
        }
    });
    console.log("Get all recommended books:--->", getAllRecommendedBooks);

    // Note: main render
    return (
        <section className="container grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-20">
            {/* first book */}
            <div className="w-full sm:col-span-2 flex flex-col gap-4 lg:gap-10">
                <SectionTitle text="Recommended for you" />
                <RecommendedBookCard book={firstBook} isFirstBook={true} />
            </div>
            {/* other books */}
            {getAllRecommendedBooks?.map((book, index) => (
                <RecommendedBookCard key={book.id} book={book} isFirstBook={false} />
            ))}
        </section>
    );
};
export default RecommendedBooks;