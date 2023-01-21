import React, {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { BiDotsVertical } from "react-icons/bi";
import Dropdown from "../Dropdown";
import { To } from "react-router";
import { FaBuilding } from "react-icons/fa";

type DataCardType = {
  title: string | undefined | null;
  value: string;
  list: ListItem[];
  Icon: any

};
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
export type DropdownType = { list: ListItem[]; Icon: any };
export default function DataCard({ title, value, list, Icon }: DataCardType) {
  return (
    <div className="shadow-md rounded-[8px] p-5">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="text-indigo-700 rounded-full bg-indigo-200 p-2">
            <Icon className="h-4 w-4" />
          </div>
          <div className="flex flex-col items-start gap-3">
            {title && (
              <div className="text-[#555770] font-medium text-sm">{title}</div>
            )}
            <div className="text-[#28293D] text-lg font-semibold">{value}</div>
          </div>
        </div>
        <div className="w-4 h-4">
          <Dropdown
            list={list}
            Icon={() => <BiDotsVertical className="w-4 h-4 text-[#555770]" />}
          />
        </div>
      </div>
    </div>
  );
}
