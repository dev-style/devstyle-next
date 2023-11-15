"use client";

import DashboardHeader from "../../components/DashboardHeader";
import AllGoodies from "../../components/Goodie/AllGoodie";
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

            <AllGoodies />
          </div>
        </div>
      </div>
    </Protected>
  );
};

export default page;
