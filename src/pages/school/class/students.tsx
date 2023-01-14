import jwtDecode from "jwt-decode";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getRequest } from "../../../api/apiCall";
import { CLASSSTUDENTS } from "../../../api/apiUrl";
import { queryKeys } from "../../../api/queryKey";
import SchoolLayout from "../../../components/Layouts/school.layout";
import StudentTable from "../../../components/Table/StudentTable";

export default function ClassStundents() {
  const params = useParams();
  const { classId } = params;
  const easysch_token: { school_uid: any; schoolSlug: any } = jwtDecode(
    localStorage?.easysch_token
  );
  const school = easysch_token?.schoolSlug;
  const { data: studentList } = useQuery(
    [queryKeys.getClassStudents, easysch_token?.school_uid],
    async () =>
      await getRequest({
        url: CLASSSTUDENTS(easysch_token?.school_uid, classId),
      }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid,
    }
  );
  const [students, setStudents] = React.useState(studentList?.data);
  React.useEffect(() => {
    setStudents(studentList?.data);
  }, [studentList?.data]);
  return <SchoolLayout>
    <div className="py-5 sm:flex sm:items-center sm:justify-between w-full">
      <h3 className="text-lg font-medium leading-6 text-gray-900 sm:block uppercase">Students</h3>
      </div>
          <StudentTable students={students} />
  </SchoolLayout>;
}
