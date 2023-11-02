"use client";

import React from "react";
import Protected from "./hooks/adminProtected";
import AdminSidebar from "./components/sidebar/AdminSidebar";
import DashboardHero from "./components/DashboardHero";

const page = () => {
  return (
    <Protected>
      <div>
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>

          <div className="w-[85%]">
            <DashboardHero isDashboard={true} />
          </div>
        </div>
      </div>
    </Protected>
  );
};

export default page;
