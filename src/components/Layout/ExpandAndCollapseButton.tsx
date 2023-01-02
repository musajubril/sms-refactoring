import React from 'react'
import { FaChevronRight } from "react-icons/fa"
export default function ExpandAndCollapseButton() {
  return (
    <div className='absolute top-[66px] left-16 w-7 h-7 flex items-center justify-center rounded-full shadow text-[#555770] bg-white'>
        <FaChevronRight className='w-3 h-3' />
    </div>
  )
}
