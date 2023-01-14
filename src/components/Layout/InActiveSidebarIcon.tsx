import React from 'react'
import { To } from 'react-router'
import { Link } from 'react-router-dom'

export default function InActiveSidebarIcon({Icon, href}: {Icon: any, href: To}) {
  return (
    <Link to={href} className='w-9 h-9 text-[#8F90A6] hover:text-[#5F30E2] hover:bg-[#EFEAFC] rounded-[4px] flex items-center justify-center transform transition-all duration-500 hover:scale-[1.03] cursor-pointer'>
        <Icon className='w-5 h-5' />
    </Link>
  )
}
