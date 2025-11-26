"use client";
import { OptionContext } from "@/context"
import { axiosPrivateClient } from "@/lib/axios.private.client";
import { useQuery } from "@tanstack/react-query";
export default function OptionProvider({ children }) {
    // 
    const axiosInstance = axiosPrivateClient();

    const { data: categoryList, isError: categoryListError, isLoading: categoryListLoading } = useQuery({
        queryKey: ["options"],
        queryFn: async () => {
            const response = await axiosInstance.get('/category/list');
            return response?.data?.data?.categories || {}; // Return books and pagination data or empty object
        }
    });

    return (
        <OptionContext.Provider
            value={{
                categoryList,
                categoryListError,
                categoryListLoading
            }}
        >
            {children}
        </OptionContext.Provider >
    );
}
