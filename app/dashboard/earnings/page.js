import BalanceSummary from "@/components/dashboard/earnings/BalanceSummary";
import EarningsTitle from "@/components/dashboard/earnings/EarningsTitle";

const EarningsPage = () => {
  return (
    <div className="w-full">
      <EarningsTitle />
      <BalanceSummary />
    </div>
  );
};
export default EarningsPage;