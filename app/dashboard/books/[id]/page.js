import EditBookForm from "../EditBookForm";

const BookEidtPage = ({ params }) => {
  const { id } = params;
  console.log("Params id:->", id);
  //   Note: main ui component
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-4">Edit book page</h1>

      <EditBookForm />
    </div>
  );
};
export default BookEidtPage;
