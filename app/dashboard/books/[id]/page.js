import EditBookForm from "../../../../components/dashboard/add_new_book/EditBookForm";

const BookEidtPage = ({ params }) => {
  const { id } = params;  
  //   Note: main ui component
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-4">Edit book page</h1>

      <EditBookForm paramsId={id} />
    </div>
  );
};
export default BookEidtPage;
