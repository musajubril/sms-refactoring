import React, { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react'
import { BiDotsVertical } from "react-icons/bi"
import Dropdown from '../Dropdown';
import { To } from 'react-router';

type StatCardType = {
  title: string | undefined | null; value: string; list: ListItem[]
}
export type ListItem = {
  url: To;
  name:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
};
export type DropdownType = { list: ListItem[], Icon: any };
export default function StatCard({title, value, list}: StatCardType){
  return (
    <div className='shadow-md rounded-[8px] p-5'>
        <div className="flex justify-between items-start">
            <div className="flex flex-col items-start gap-3">
              {
                title &&
                <div className="text-[#555770] font-medium text-sm">{title}</div>
              }
                <div className="text-[#28293D] text-3xl font-semibold">{value}</div>
            </div>
            <div className="w-4 h-4">
              <Dropdown list={list} Icon={()=>(<BiDotsVertical className='w-4 h-4 text-[#555770]' />)} />
            </div>
        </div>
    </div>
  )
}
