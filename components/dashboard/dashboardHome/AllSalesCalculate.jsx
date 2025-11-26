import bookImg from "@/public/books/dashBookImge.png"
import saleImg from "@/public/books/totalSale.png"
import earningsImg from "@/public/books/totalEarning.png"
import deliveredImg from "@/public/books/totalDelivered.png"
import SalesCalculateCart from "./SalesCalculateCart";

const allSalesCalculateData = [
    {
        id: 1,
        title: "Total Books",
        value: 150,
        image: bookImg
    },
    {
        id: 2,
        title: "Total Sale",
        value: 154,
        image: saleImg
    },
    {
        id: 3,
        title: "Total Earnings",
        value: 15446,
        image: earningsImg
    },
    {
        id: 4,
        title: "Total Deliered",
        value: 56,
        image: deliveredImg
    },
];

const AllSalesCalculate = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 2xl:gap-[30px] mt-5 2xl:mt-8">
            {
                allSalesCalculateData?.map((item) => {
                    return (
                        <SalesCalculateCart
                            key={item?.id}
                            item={item}
                        />
                    )
                })
            }
        </div>
    );
};
export default AllSalesCalculate;