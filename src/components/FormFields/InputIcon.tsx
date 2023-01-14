import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'
import { InputIconType } from '../../Interfaces/Input';
export default function InputIcon({label, type, value, change, required, id, placeholder, description, Icon, disabled}: InputIconType) {
  return (
    <div>
        <div className="flex-col flex gap-[6px]">
            <div className="text-[#28293D]">{label}</div>
            <div className="h-10 relative">
            <div className="absolute inset-y-0 right-[16px] flex items-center pl-3 pointer-events-none">
              <Icon className="w-5 h-5 text-[#8F90A6]" />
            </div>
                <input type={type} required={required} onChange={change} id={id} value={value} placeholder={placeholder} className='px-4 py-[10px] h-10 rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full disabled:bg-[#F5F6F8] focus:border-[#5F30E2] ' />
            </div>
            <div className="text-xs text-[#555770] font-normal flex justify-start ">{description}</div>
        </div>
    </div>
  )
}
