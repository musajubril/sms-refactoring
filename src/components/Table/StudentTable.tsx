import React from "react";
import GenderImage from "../../helpers/GenderImage";
import { BiDotsVertical } from "react-icons/bi";
import Dropdown from "../Dropdown";
import Table from "./Table";

export default function StudentTable({ students }: { students: any[] }) {
  return (
    <>
      <Table head={["Full Name", "Phone Number", "Age", ""]}>
        {students?.map((student, i) => (
          <tr>
            <td className="p-2 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                    className="rounded-full h-10 w-10 object-center object-cover"
                    src={
                      student?.image
                        ? student?.image
                        : GenderImage(student?.gender)
                    }
                    alt={student?.full_name}
                  />
                </div>
                <div className="font-medium text-gray-800">{student?.full_name}</div>
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left">{student?.phone_number}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium">
                {student?.age}
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <Dropdown
                list={[
                  {name: "View Profile", url: `/students/${student?.id}/profile`},
                  {name: "Edit", url: `/students/${student?.id}/edit`},
                  {name: "Courses", url: `/students/${student?.id}/courses`},
                  {name: "View Result", url: `/students/${student?.id}`},
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
