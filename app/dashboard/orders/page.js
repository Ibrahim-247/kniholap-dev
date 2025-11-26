import DashboardOrdersList from "@/components/dashboard/orders/DashboardOrdersList";
import OldOrderList from "@/components/dashboard/orders/OldOrderList";
import React from "react";

const OrdersPage = () => {
  return (
    <div className="w-full">
      <DashboardOrdersList />
      <OldOrderList />
    </div>
  );
};
export default OrdersPage;
