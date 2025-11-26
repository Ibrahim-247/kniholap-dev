import BookCategories from "@/components/home/BookCategories";
import DownloadApp from "@/components/home/DownloadApp";
import Hero from "@/components/home/Hero";
import LibrarySection from "@/components/home/LibrarySection";
import RecommendedBooks from "@/components/home/RecommendedBooks";
import SubscriptionList from "@/components/home/SubscriptionList";
import Testimonials from "@/components/home/Testimonials";
import TopSelling from "@/components/home/TopSelling";
import { axiosPrivateServer } from "@/lib/axios.private.server";

export default async function Home() {
  const axiosInstance = await axiosPrivateServer();
  // get to rated books
  let topRatedBooks = [];
  try {
    const response = await axiosInstance.get("/top/review/book/list");
    topRatedBooks = response?.data?.data || [];
  } catch (err) {
    console.error("Failed to fetch top rated books:", err);
  }
  // get recommended books
  let recommendedBooks = [];

  // get top selling books
  let topSellingBooks = [];
  try {
    const response = await axiosInstance.get("/top/selling/book/list");
    topSellingBooks = response?.data?.data || [];
  } catch (err) {
    console.error("Failed to fetch recommended books:", err);
  }

  // main render
  return (
    <div className="w-full flex flex-col items-center xl:gap-40 gap-6 sm:gap-10 md:gap-24 justify-start">
      <Hero topRatedBooks={topRatedBooks} />
      <TopSelling topSellingBooks={topSellingBooks} />
      <LibrarySection />
      <BookCategories />
      <RecommendedBooks />
      <SubscriptionList />
      <Testimonials />
      <DownloadApp />
    </div>
  );
}
