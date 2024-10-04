"use client";

import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import OrdersAnalytics from "../../components/Analytics/OrdersAnalytics";
import AllInvoices from "../../components/Order/AllInvoices";
import OrderAnalytics from "../../components/Analytics/OrderAnalytics";

const page = () => {
  return (
    <div>
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]  px-10">
          <DashboardHeader />
          <div className="  flex flex-col w-full  mx-auto justify-center min-h-[screen] items-center  mt-[20px]">
            <div className=" bg-white w-full mt-[30px] h-[40vh] shadow-sm mx-auto">
              <OrderAnalytics  />
            </div>
            <div className="p-5 w-full mx-auto">
              <h5 className=" text-black text-[20px] font-[400] font-Poppins pb-3">
                Recent Transactions
              </h5>
              <AllInvoices isDashboard={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
