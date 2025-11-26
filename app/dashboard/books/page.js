import BooksTitle from "@/components/dashboard/books/BooksTitle";
import DashboardBooksList from "@/components/dashboard/books/DashboardBooksList";

const DashboardBooks = () => {
  return (
    <div className="w-full">
      <BooksTitle />
      <DashboardBooksList />
    </div>
  );
};
export default DashboardBooks;