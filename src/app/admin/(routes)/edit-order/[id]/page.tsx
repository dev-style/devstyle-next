'use client'
import React from 'react'
import AdminSidebar from "../../../components/sidebar/AdminSidebar"
import DashboardHeader from '@/app/admin/components/DashboardHeader';
import Protected from '@/app/admin/hooks/adminProtected';
import EditOrder from '@/app/admin/components/Order/EditOrder';

type Props = {}

const page = ({params}:any) => {
    const id = params?.id;

  return (
    <Protected>

    <div>
      
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
                <EditOrder
                 id={id} />
                
            </div>
        </div>
    </div>
    </Protected>
  )
}

export default page