import DashboardHeader from "@/components/dashboard/dashboardHome/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

const SellerDashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-5">
          {children}
        </main>
      </div>
    </div>
  );
};
export default SellerDashboardLayout;