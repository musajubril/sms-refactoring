import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'
import { InputType } from '../../Interfaces/Input';

export default function Input({label, type, value, change, required, id, placeholder, description, disabled}: InputType) {
  return (
    <div>
        <div className="flex-col flex gap-[6px]">
            <div className="text-[#28293D]">{label}</div>
            <div className="h-10 relative">
                <input type={type} required={required} onChange={change} id={id} value={value} placeholder={placeholder} className='px-4 py-[10px] h-10 rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full focus:border-[#5F30E2] ' disabled={disabled} />
            </div>
            <div className="text-xs text-[#555770] font-normal flex justify-start ">{description}</div>
        </div>
    </div>
  )
}
