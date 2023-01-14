
import React from 'react'
import InputIcon from './FormFields/InputIcon'
import { FaSearch, FaChevronDown, FaSortDown, FaBuilding } from 'react-icons/fa';
import IconButton from './Buttons/IconButton';
import { IconButtonType } from '../Interfaces/Button';
import { InputIconType } from '../Interfaces/Input';

type TitleType = {
    title: string;
    btn: IconButtonType
}

export default function Title({title, btn}: TitleType) {

  return (
    <div className="py-5 sm:flex sm:items-center sm:justify-between w-full">
      <h3 className="text-lg font-medium leading-6 text-gray-900 sm:block uppercase">{title}</h3>
      <div className="mt-3 sm:mt-0 sm:ml-4 flex items-center">
        <div className="flex-col flex gap-[6px] flex-grow sm:flex-grow-0">
            <div className="h-10 relative">
            {/* <div className="absolute inset-y-0 right-[16px] flex items-center pl-3 pointer-events-none">
              <FaSearch className="w-5 h-5 text-[#8F90A6]" />
            </div> */}
                <input type="search" required={false} onChange={()=>{}} id={"search"} placeholder={`Search ${title}`} className='px-4 py-[10px] h-10 rounded-l-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full disabled:bg-[#F5F6F8] focus:border-[#5F30E2] ' />
            </div>
        </div>
        <button onClick={btn.click} className="py-[10px] px-5 text-white bg-[#5F30E2] rounded-r-[4px] text-sm font-medium cursor-pointer hover:bg-[#8F6EEB] disabled:bg-[#F5F6F8] focus:ring-2 focus:border-white focus:border-2 focus:ring-[#5f30e2] disabled:text-[#8F90A6] transition-all duration-500 flex gap-2 items-center" type={btn.type} disabled={btn.disabled}>
              {btn.value}
                <btn.Icon />
            </button>
        </div>
      </div>
  )
}
