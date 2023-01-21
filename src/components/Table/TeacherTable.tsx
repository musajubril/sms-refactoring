import React from "react";
import GenderImage from "../../helpers/GenderImage";
import { BiDotsVertical } from "react-icons/bi";
import Dropdown from "../Dropdown";
import Table from "./Table";

export default function TeacherTable({ teachers }: { teachers: any[] }) {
  return (
    <>
      <Table head={["Full Name", "Phone Number", "Activation Code", ""]}>
        {teachers?.map((teacher, i) => (
          <tr>
            <td className="p-2 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                    className="rounded-full h-10 w-10 object-center object-cover"
                    src={
                      teacher?.image
                        ? teacher?.image
                        : GenderImage(teacher?.gender)
                    }
                    alt={teacher?.full_name}
                  />
                </div>
                <div className="font-medium text-gray-800">{teacher?.full_name}</div>
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left">{teacher?.phone_number}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium">
                {teacher?.code}
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <Dropdown
                list={[
                  {name: "View Profile", url: `/teachers/${teacher?.id}/profile`},
                  {name: "Edit", url: `/teachers/${teacher?.id}/edit`},
                  {name: "Courses", url: `/teachers/${teacher?.id}/courses`},
                  {name: "View Result", url: `/teachers/${teacher?.id}`},
                ]}
                Icon={() => (
                  <BiDotsVertical className="w-4 h-4 text-[#555770]" />
                )}
              />
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
}
