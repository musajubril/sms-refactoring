import React from "react";
import GenderImage from "../../helpers/GenderImage";
import { BiDotsVertical } from "react-icons/bi";
import Dropdown from "../Dropdown";
import Table from "./Table";
import moment from "moment";

export default function HistoryTable({ histories }: { histories: any[] }) {
  return (
    <>
      <Table head={["","Full Name", "Class", "Amount Paid", "Total Amount Paid", "Amount Left", "Payment For", "Payment Type", "Date"]}>
        {histories?.map((history, i) => (
          <tr>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium">
              {i+1}.
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  <img
                    className="rounded-full h-10 w-10 object-center object-cover"
                    src={
                        history?.student.image
                        ? history?.student.image
                        : GenderImage(history?.student.gender)
                    }
                    alt={history?.student.full_name}
                    />
                </div>
                <div className="font-medium text-gray-800">{history?.student.full_name}</div>
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left">{history.student.current_class.name}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium">
              #{history.amount}
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium">
              #{history.student_bill.amount_paid}
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium">
              #{Number(history.student_bill.amount) -
                          Number(history.student_bill.amount_paid)}
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium">
              {history.student_bill.bill.display_name}
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium">
              {history.source}
              </div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium">
              {moment(history.date_added).format("LL")}
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
}
