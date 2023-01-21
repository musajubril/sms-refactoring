import React from 'react'
import { useParams } from 'react-router-dom'
import SchoolLayout from '../../../components/Layouts/school.layout'

export default function ClassBill() {
    const params = useParams()
    const {classId} = params
  return (
    <>
    <div className="py-5 sm:flex sm:items-center sm:justify-between w-full">
      <h3 className="text-lg font-medium leading-6 text-gray-900 sm:block uppercase">{classId} Bill</h3>
      </div>
  </>
  )
}
