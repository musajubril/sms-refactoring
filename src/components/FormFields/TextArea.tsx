import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'
import { TextAreaType } from '../../Interfaces/Input';
export default function TextArea({label, value, change, required, id, description, disabled, placeholder}: TextAreaType) {
  return (
    <div>
        <div className="flex-col flex gap-[6px]">
            <div className="text-[#28293D]">{label}</div>
            <div className="relative">
                <textarea required={required} rows={3} id={id} value={value} onChange={change} placeholder={placeholder} className='px-4 py-[10px] rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full focus:border-[#5F30E2] disabled:bg-[#F5F6F8] ' disabled={disabled} />
            </div>
            <div className="text-xs text-[#555770] font-normal flex justify-start ">{description}</div>
        </div>
    </div>
  )
}
