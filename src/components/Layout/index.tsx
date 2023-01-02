import React from 'react'
import Divider from '../Divider';
import SideBar from './SideBar'

export default function Layout({children, navs}: {children: any, navs: {
    name: string;
    href: string;
    icon: any;
  }[]}) {
  return (
    <div className='flex'>
        <div className="hidden md:block">
        <SideBar navs={navs} />
        </div>
        <div className="md:ml-[78px] w-full px-4">
            <div className="pt-5 w-full flex flex-col items-start">
                <div className="text-[#28293D] font-bold text-xl md:text-2xl pb-[10px]">
                Welcome Back, Rex and Regina 👋 
                </div>
                <div className="pb-[20px] text-[#555770] font-semibold md:text-xl text-md">
                Here are some insights for your School's activity
                </div>
                <Divider />
            </div>
        {children}
        </div>
    </div>
  )
}
