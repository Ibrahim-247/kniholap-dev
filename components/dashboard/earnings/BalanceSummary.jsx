import BalanceSummaryCard from "./BalanceSummaryCard";
import PayOutsList from "./PayOutsList";

const balanceCardData = [
    {
        id: 1,
        amount: 300,
        balanceText: "Current Balance:"
    },
    {
        id: 2,
        amount: 420,
        balanceText: "Total Sales (This Month):"
    },
    {
        id: 3,
        amount: 420,
        balanceText: "Withdrawable Amount:"
    },
];

const BalanceSummary = () => {
    return (
        <div className="w-full mt-8">
            <p className="text-2xl text-[#0A0910] font-medium mb-4 lg:mb-8">Balance / Summary</p>

            {/* balance card */}
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
                {
                    balanceCardData?.map((item) => {
                        return (
                            <BalanceSummaryCard
                                key={item?.id}
                                item={item}
                            />
                        )
                    })
                }
            </div>

            <PayOutsList />
        </div>
    );
};
export default BalanceSummary;