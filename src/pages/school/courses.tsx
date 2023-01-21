import jwtDecode from 'jwt-decode'
import React from 'react'
import { useQuery, useMutation } from 'react-query'
import { getRequest, postRequest } from '../../api/apiCall'
import { GET_COURSES, HOMEROOMS } from '../../api/apiUrl'
import { queryKeys } from '../../api/queryKey'
import { useToasts } from 'react-toast-notifications'
import { FaBuilding, FaBookOpen } from 'react-icons/fa';
import DataCard from '../../components/Cards/DataCard'
import SchoolLayout from '../../components/Layouts/school.layout'
import Title from '../../components/Title'

export default function Courses() {
    const easysch_token:{school_uid: any} = jwtDecode(localStorage?.easysch_token)
  const { schoolSlug: school } = localStorage
  
  const {
    data:courseList
  } = useQuery(
    [queryKeys.getCourses, easysch_token?.school_uid],
    async () => await getRequest({ url: GET_COURSES(easysch_token?.school_uid) }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid
    }
    )
  const {
    data:homerooms
  } = useQuery(
    [queryKeys.getClasses, easysch_token?.school_uid],
    async () => await getRequest({ url: HOMEROOMS(easysch_token?.school_uid) }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid
    }
    )
  const [allCourses, setAllCourses] = React.useState(courseList?.data)
  const [rooms, setRooms] = React.useState(homerooms?.data)
  React.useEffect(() => {
    setAllCourses(courseList?.data)
    setRooms(homerooms?.data)
  },[courseList?.data, homerooms?.data ])
  const { addToast } = useToasts();

  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      addToast(data?.message, {
        appearance: "success",
        autoDismiss: true,
      });
      setAllCourses([...allCourses, {name: data?.data.name, id: data?.data.id}])
      setOpen(false)
      setState({
        name: "",
        class_ids: [],
        classes: []
      });
      setSelected([])
    },
  });
  const submitForm = (e: any) => {
    e.preventDefault();
    mutate({
      url: GET_COURSES(easysch_token?.school_uid),
      data: {
        name: state.name,
        class_ids: state.class_ids
      },
    });
  };
  const [state, setState] = React.useState({
    name: "",
    class_ids: [],
    classes: []
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState([])
  return (
    <>
      <Title
        title="Courses"
        btn={{
          size: "md",
          value: "Add Course",
          click: () => {},
          location: "end",
          Icon: FaBookOpen,
          disabled: false,
          type: "submit",
        }}
      />
      <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allCourses?.map(
          (course: { name: string; id: React.Key | null | undefined; }, i: any) => (
            <DataCard title={""} value={course?.name} key={course?.id} list={[
                {name: "Students", url: `${course?.id}/students`},
                {name: "Courses", url: `${course?.id}/courses`},
                {name: "Bill", url: `${course?.id}/bill`},
            ]}
            Icon={FaBookOpen} />
          )
        )}
      </div>
    </>
  )
}
