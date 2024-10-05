"use client";

import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import OrdersAnalytics from "../../components/Analytics/OrdersAnalytics";
import AllInvoices from "../../components/Order/AllInvoices";
import OrderAnalytics from "../../components/Analytics/OrderAnalytics";

const Page = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div>
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar changeCollapsedValue={()=>setIsCollapsed(!isCollapsed)} />
        </div>
        <div className="w-[85%]  px-10">
          <DashboardHeader />
          <div className="  flex flex-col w-full  mx-auto justify-center min-h-[screen] items-center  mt-[20px]">
            <div className=" bg-white w-full mt-[30px] h-[40vh] shadow-sm mx-auto">
              <OrderAnalytics isCollapsed={isCollapsed}  />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
