"use client";

import GoodieAnalytics from "../../components/Analytics/GoodieAnalytics";
import OrderAnalytics from "../../components/Analytics/OrderAnalytics";
import DashboardHeader from "../../components/DashboardHeader";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import Protected from "../../hooks/adminProtected";

type Props = {};

const page = (props: Props) => {
  return (
    <Protected>
      <div>
        <div className="flex">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHeader />

            <OrderAnalytics />
          </div>
        </div>
      </div>
    </Protected>
  );
};

export default page;
