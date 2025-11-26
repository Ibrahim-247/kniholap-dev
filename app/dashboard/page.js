import AllSalesCalculate from "@/components/dashboard/dashboardHome/AllSalesCalculate";
import DashboardReviews from "@/components/dashboard/dashboardHome/DashboardReviews";
import DashboardTitle from "@/components/dashboard/dashboardHome/DashboardTitle";
import RecentOrders from "@/components/dashboard/dashboardHome/RecentOrders";

const SellerDashboard = () => {
  return (
    <div className="w-full">
      <DashboardTitle />
      <AllSalesCalculate />
      <RecentOrders />
      <DashboardReviews />
    </div>
  );
};
export default SellerDashboard;