import CommonDashboardTitle from "@/components/common/CommonDashboardTitle";
import CustomPagination from "@/components/common/CustomPagination";
import { BiCheckCircle } from "react-icons/bi";
import DesktopTableView from "./DesktopTableView";

const PayOutsList = () => {
    const payouts = [
        {
            date: "20 Sept",
            amount: "$150",
            status: "Completed"
        },
        {
            date: "24 Sept",
            amount: "$220",
            status: "Completed"
        },
        {
            date: "23 Sept",
            amount: "$180",
            status: "Completed"
        },
        {
            date: "22 Sept",
            amount: "$120",
            status: "Completed"
        },
        {
            date: "21 Sept",
            amount: "$200",
            status: "Completed"
        },
        {
            date: "20 Sept",
            amount: "$150",
            status: "Completed"
        },
        {
            date: "21 Sept",
            amount: "$200",
            status: "In Progress"
        },
        {
            date: "22 Sept",
            amount: "$180",
            status: "Pending"
        },
    ];

    const renderStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "text-green-600";
            case "Pending":
                return "text-yellow-500";
            case "In Progress":
                return "text-blue-500";
            default:
                return "text-gray-500";
        }
    };

    // Note: main ui component
    return (
        <div className="w-full mt-8">
            <CommonDashboardTitle
                text="Past Payouts List:"
            />

            {/* table container */}
            <div className="bg-white shadow-sm rounded-xl md:rounded-2xl mx-auto mt-4 md:mt-6 lg:mt-8 px-3 md:px-4 pb-6 md:pb-8">

                {/* Mobile Cards View */}
                <div className="block md:hidden space-y-3">
                    {payouts?.map((payout, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm p-4"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-600">Date:</span>
                                <span className="text-sm">{payout?.date}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-600">Amount:</span>
                                <span className="text-sm">{payout?.amount}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-600">Status:</span>
                                <div
                                    className={`flex items-center justify-end gap-2 ${renderStatusColor(
                                        payout?.status
                                    )}`}
                                >
                                    <span className="text-sm">{payout?.status}</span>
                                    <BiCheckCircle className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Table View */}
                <DesktopTableView
                    payouts={payouts}
                    renderStatusColor={renderStatusColor}
                />

                <CustomPagination
                    perPage={10}
                    totalItem={payouts.length}
                    currentPage={1}
                    className="mt-4 md:mt-6"
                    showSizeChanger={true}
                />

                {/* Pagination */}
                {/* <div className="flex justify-end items-center gap-3 mt-6">
                    <button className="px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100">
                        Prev
                    </button>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button
                            key={num}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${num === 2
                                ? "bg-orange-500 text-white"
                                : "text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {num}
                        </button>
                    ))}
                    <button className="px-3 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                        Next
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default PayOutsList;