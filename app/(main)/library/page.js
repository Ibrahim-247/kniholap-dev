import LibraryClient from '@/components/library/LibraryClient'
import axiosPublic from '@/lib/axios.public';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

export const metadata = {
    title: "Kniholap || Library",
    description: "Your One-Stop Book Marketplace & Digital Library.Trade physical books, read premium eBooks, and connect with readers worldwide.",
};

const Library = async () => {
    const axiosInstance = axiosPublic();
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["books"],
        queryFn: async () => {
            const response = await axiosInstance.get('/book/list');
            return response?.data?.data || {}; // Return books and pagination data or empty object
        }
    });
    // just for debugging
    //  const prefetchedBooks = queryClient.getQueryData(["books"]);
    //  console.log("Prefetched Books:", prefetchedBooks);
    // main render
    return (
        <div className='container flex flex-col justify-start gap-5 md:gap-10 items-center'>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <LibraryClient />
            </HydrationBoundary>
        </div>
    )
}

export default Library;
