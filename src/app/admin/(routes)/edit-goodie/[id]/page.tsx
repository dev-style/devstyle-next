'use client'
import React from 'react'
import AdminSidebar from "../../../components/sidebar/AdminSidebar"
import DashboardHeader from '@/app/admin/components/DashboardHeader';
import EditGoodie from '@/app/admin/components/Goodie/EditGoodie';

type Props = {}

const page = ({params}:any) => {
    const id = params?.id;

  return (
    <div>
      
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
                <EditGoodie id={id} />
                
            </div>
        </div>
    </div>
  )
}

export default page