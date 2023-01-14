import React from 'react'
import { To } from 'react-router'
import { Link } from 'react-router-dom'

export default function ActiveSidebarIcon({Icon, href}: {Icon: any, href: To}) {
  return (
    <Link to={href} className='w-9 h-9 text-[#5F30E2] bg-[#EFEAFC] rounded-[4px] flex items-center justify-center cursor-pointer'>
        <Icon className='w-5 h-5' />
    </Link>
  )
}
