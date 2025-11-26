import { Modal } from "antd";
import { PiSealCheckLight } from "react-icons/pi";
import { TbCancel } from "react-icons/tb";

const BookRemoveModal = ({ isModalOpen, handleCancel }) => {
    return (
        <Modal
            centered
            footer={null}
            open={isModalOpen}
            onCancel={handleCancel}
        >
            <div className="flex flex-col items-center text-center space-y-4 py-6">
                <TbCancel className="text-7xl text-[#F84E12]" />


                <h2 className="text-2xl font-semibold">Are you sure you want to remove "Atomic Habits" from your listings?
                </h2>
                <p className="text-gray-500 text-base">
                    This action cannot be undone.
                </p>

                {/* remove and cancel buttons */}
                <div className="w-full flex items-center gap-4 mt-5">
                    {/* remove */}
                    <button
                        onClick={handleCancel}
                        className="cursor-pointer w-full border border-[#F84E12] rounded-full py-2 bg-[#F84E12] text-white hover:bg-transparent hover:text-black transition-all duration-300"
                    >
                        Remove
                    </button>

                    {/* cancel */}
                    <button
                        onClick={handleCancel}
                        className="cursor-pointer w-full border border-[#F84E12] rounded-full py-2 bg-transparent text-black hover:bg-[#F84E12] hover:text-white transition-all duration-300"
                    >
                        Keep
                    </button>
                </div>
            </div>
        </Modal>
    );
};
export default BookRemoveModal;