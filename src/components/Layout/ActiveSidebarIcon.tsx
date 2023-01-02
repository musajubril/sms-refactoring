import React from 'react'

export default function ActiveSidebarIcon({Icon}: {Icon: any}) {
  return (
    <div className='w-9 h-9 text-[#5F30E2] bg-[#EFEAFC] rounded-[4px] flex items-center justify-center'>
        <Icon className='w-5 h-5' />
    </div>
  )
}
