import React from "react";
import ActiveSidebarIcon from "./ActiveSidebarIcon";
import ExpandAndCollapseButton from "./ExpandAndCollapseButton";
import InActiveSidebarIcon from "./InActiveSidebarIcon";
import { useLocation } from "react-router";

export default function SideBar({
  navs,
}: {
  navs: {
    name: string;
    href: string;
    icon: any;
  }[];
}) {
  const location = useLocation()
  const path = location.pathname
  console.log(path)
  return (
    <>
      <div className="w-[78px] pt-[33px] fixed min-h-screen shadow-lg">
        <img
          src={require("../../images/logo.png")}
          className="w-full pl-6 pr-[22px]"
          alt="logo"
        />
        <div className="flex flex-col px-[21px] gap-6 pt-[44px]">
          {navs.map((nav, i) => (
            <>
            {
              path === nav.href ?
              <ActiveSidebarIcon href={nav.href} Icon={nav.icon} key={i} />
              :
            <InActiveSidebarIcon href={nav.href} Icon={nav.icon} key={i} />
            }
            </>
          ))}
        </div>
      </div>
      <ExpandAndCollapseButton />
    </>
  );
}
