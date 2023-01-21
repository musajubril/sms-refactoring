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
          
                <Divider />
        {children}
        </div>
    </div>
  )
}
