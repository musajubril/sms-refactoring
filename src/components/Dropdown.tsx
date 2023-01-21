/* This example requires Tailwind CSS v2.0+ */
import {
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { Link, To } from "react-router-dom";
import { DropdownType, ListItem } from "./Cards/StatCard";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


export default function Dropdown({ list, Icon }: DropdownType) {
  return (
    <Menu as="div" className="relative inline-block text-left z-20">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="cursor-pointer rounded-full p-1 hover:bg-gray-100" >
              {Icon}
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {list?.map((item: ListItem, i: any) => (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={item.url}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
