import React from 'react'

export default function Status({status, value}: {status: string, value: string}) {
  return (
    <div className='flex'>
    {
        status==="success" &&
        <div className="py-2 px-3 rounded-[4px] font-medium text-sm bg-[#E6F3E5] text-[#4EAF51]">{value}</div>
    }
    {
        status==="pending" &&
        <div className="py-2 px-3 rounded-[4px] font-medium text-sm bg-[#EFEAFC] text-[#5F30E2]">{value}</div>
    }
    {
        status==="error" &&
        <div className="py-2 px-3 rounded-[4px] font-medium text-sm bg-[#FDE4E1] text-[#F54336]">{value}</div>
    }
    </div>
  )
}
