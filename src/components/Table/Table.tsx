import React from 'react'
import GenderImage from '../../helpers/GenderImage'

export default function Table({head, children}:{head: string[], children: any}) {
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-5">
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                {
                                    head.map((hd: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined)=>
                                    <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">{hd}</div>
                                </th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {children}
                            </tbody>
                        </table>
                        </div>
                        </div>
                        </div>
  )
}
