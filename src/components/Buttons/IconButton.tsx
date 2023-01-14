import React, { MouseEventHandler } from 'react'
import { IconButtonType } from '../../Interfaces/Button';

export default function IconButton({size, value, click, location, Icon, disabled, type}: IconButtonType) {
    return (
      <div className={`flex ${location==="end" && "justify-end"} ${location==="start" && "justify-start"} ${location==="start" && "justify-start"} w-full`}>
        {
          size==="sm" &&
            <button onClick={click} className="py-2 px-5 text-white bg-[#5F30E2] rounded-[4px] text-xs font-medium cursor-pointer hover:bg-[#8F6EEB] disabled:bg-[#F5F6F8] focus:ring-2 focus:border-white focus:border-2 focus:ring-[#5f30e2] disabled:text-[#8F90A6] transition-all duration-500 flex gap-2 items-center" disabled={disabled}>
                <Icon />
              {value}
            </button>
        }
        {
          size==="md" &&
            <button onClick={click} className="py-[10px] px-5 text-white bg-[#5F30E2] rounded-[4px] text-sm font-medium cursor-pointer hover:bg-[#8F6EEB] disabled:bg-[#F5F6F8] focus:ring-2 focus:border-white focus:border-2 focus:ring-[#5f30e2] disabled:text-[#8F90A6] transition-all duration-500 flex gap-2 items-center" type={type} disabled={disabled}>
                <Icon />
              {value}
            </button>
        }
        {
          size==="lg" &&
            <button onClick={click} className="py-3 px-5 text-white bg-[#5F30E2] rounded-[4px] text-sm font-medium cursor-pointer hover:bg-[#8F6EEB] disabled:bg-[#F5F6F8] focus:ring-2 focus:border-white focus:border-2 focus:ring-[#5f30e2] disabled:text-[#8F90A6] transition-all duration-500 flex gap-2 items-center" type={type} disabled={disabled}>
                <Icon />
              {value}
            </button>
        }
      </div>
    )
  }
  