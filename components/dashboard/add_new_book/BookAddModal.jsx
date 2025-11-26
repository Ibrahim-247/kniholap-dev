import { Modal } from "antd";
import { PiSealCheckLight } from "react-icons/pi";

const BookAddModal = ({ isModalOpen, handleCancel }) => {
    return (
        <Modal
            centered
            footer={null}
            open={isModalOpen}
            onCancel={handleCancel}
        >
            <div className="flex flex-col items-center text-center space-y-4 py-6">
                <PiSealCheckLight className="text-6xl text-[#F84E12]" />

                <h2 className="text-2xl font-semibold">Book Added Successfully!</h2>
                <p className="text-gray-500 text-base">
                    Your new book has been added to the library collection.
                </p>
                <button
                    type="primary"
                    onClick={handleCancel}
                    className="cursor-pointer mt-4 w-[150px] py-2 text-white font-medium text-base rounded-md bg-red-300 hover:scale-105 hover:shadow transition-all duration-300"
                >
                    Close
                </button>
            </div>
        </Modal>
    );
};
export default BookAddModal;