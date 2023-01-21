import jwtDecode from 'jwt-decode'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { getRequest } from '../../../api/apiCall'
import { HOMEROOMCOURSES } from '../../../api/apiUrl'
import { queryKeys } from '../../../api/queryKey'
import SchoolLayout from '../../../components/Layouts/school.layout'

export default function ClassCourses() {
    const params = useParams()
    const {classId} = params
//     const easysch_token:{school_uid: any, schoolSlug: any} = jwtDecode(localStorage?.easysch_token)
//     const school = easysch_token?.schoolSlug

//   const { data: courseList } = useQuery(
//     [queryKeys.getHomeroomCourses, easysch_token?.school_uid],
//     async () => await getRequest({ url: HOMEROOMCOURSES(easysch_token?.school_uid, classId) }),
//     {
//       retry: 2,
//       enabled: !!easysch_token?.school_uid
//     }
//   );
//   const [courses, setCourses] = React.useState(
//     courseList?.data
//   );
//   React.useEffect(() => {
//     setCourses(courseList?.data);
//   }, [
//      courseList?.data
//   ]);
  return (
    <>
    <div className="py-5 sm:flex sm:items-center sm:justify-between w-full">
      <h3 className="text-lg font-medium leading-6 text-gray-900 sm:block uppercase">{classId} Courses</h3>
      </div>
  </>
  )
}
