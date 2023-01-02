import React from "react";
import ActiveSidebarIcon from "./ActiveSidebarIcon";
import ExpandAndCollapseButton from "./ExpandAndCollapseButton";
import InActiveSidebarIcon from "./InActiveSidebarIcon";

export default function SideBar({
  navs,
}: {
  navs: {
    name: string;
    href: string;
    icon: any;
  }[];
}) {
  return (
    <>
      <div className="w-[78px] pt-[33px] fixed min-h-screen shadow-lg">
        <img
          src={require("../../images/logo.png")}
          className="w-full pl-6 pr-[22px]"
          alt="logo"
        />
        <div className="flex flex-col px-[21px] gap-6 pt-[44px]">
          <ActiveSidebarIcon Icon={navs[0].icon} />
          {navs.slice(1, navs?.length).map((nav, i) => (
            <InActiveSidebarIcon Icon={nav.icon} key={i} />
          ))}
        </div>
      </div>
      <ExpandAndCollapseButton />
    </>
  );
}
