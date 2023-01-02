import React from 'react'
import { BiDotsVertical } from "react-icons/bi"

export default function StatCard({title, value}: {title: string; value: string}){
  return (
    <div className='shadow-md rounded-[8px] p-5'>
        <div className="flex justify-between items-start">
            <div className="flex flex-col items-start gap-3">
                <div className="text-[#555770] font-medium text-sm">{title}</div>
                <div className="text-[#28293D] text-3xl font-semibold">{value}</div>
            </div>
            <div className="w-4 h-4">
                <BiDotsVertical className='w-4 h-4 text-[#555770]' />
            </div>
        </div>
    </div>
  )
}
