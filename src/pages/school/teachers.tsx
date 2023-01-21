import React from 'react'
import { StudentType } from '../../Interfaces/Student';
import jwtDecode from 'jwt-decode';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { useToasts } from 'react-toast-notifications';
import { getRequest, postRequest } from '../../api/apiCall';
import { HOMEROOMS, STUDENTS, TEACHERS } from '../../api/apiUrl';
import { queryKeys } from '../../api/queryKey';
import SchoolLayout from '../../components/Layouts/school.layout';
import Title from '../../components/Title';
import { FaUserPlus } from 'react-icons/fa';
import StudentTable from '../../components/Table/StudentTable';
import SearchField from '../../helpers/Search';
import TeacherTable from '../../components/Table/TeacherTable';

export default function Teachers() {
  const { schoolSlug: school } = localStorage
  
  const easysch_token:{school_uid: any} = jwtDecode(localStorage?.easysch_token)
  const [offset, setOffset] = React.useState(0)
  const { data: teacherList, isPreviousData, status, isFetching } = useQuery(
    [queryKeys.getTeachers, easysch_token?.school_uid, offset],
    async () => await getRequest({ url: TEACHERS(easysch_token?.school_uid, offset, 10) }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid,
      onError(err){
        alert(err)
      }
    }
  );
  const [teachers, setTeachers] = React.useState(teacherList?.data);
  const [filteredData, setFilteredData] = React.useState(teacherList?.data);
  React.useEffect(() => {
    setTeachers(teacherList?.data);
    setFilteredData(teacherList?.data);
  }, [teacherList?.data]);
  const [page, setPage] = React.useState(1)
React.useEffect(()=>{
  setOffset((page-1)*10)
},[page])
  const cache = useQueryClient();
  const { addToast } = useToasts();
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      addToast(data?.message, {
        appearance: "success",
        autoDismiss: true,
      });
      setOpen(false);
      setTeachers([
        ...teachers,
        {
          user: {
            full_name: data?.data.full_name,
            image: data?.data.image,
            email: data?.data.email,
            is_active: data?.data.is_active,
            role: data?.data.groups[0]?.name,
            groups: data?.data.groups,
            phone_number: data?.data.phone_number,
          },
          gender: data?.data.gender,
          id: data?.data.id,
        },
      ]);
      setState({
        first_name: "",
        last_name: "",
        religion: "",
        phone_number: "",
        address: "",
        date_of_birth: new Date(),
        email: "",
        gender: "",
        image: "",
        imageFile: "",
        role: "",
      });
      cache.invalidateQueries();
    },
  });
  const submitForm = (e: any) => {
    e.preventDefault();
    const data = new FormData();
    data.append("first_name", state.first_name);
      data.append("last_name", state.last_name);
      data.append("religion", state.religion);
      data.append("phone_number", state.phone_number);
      data.append("address", state.address);
      data.append("date_of_birth", state.date_of_birth.toString());
      data.append("email", state.email);
      data.append("image", state.image);
      data.append("gender", state.gender);
      data.append("role", state.role)
      data.append("image", state.image);

    mutate({
      url: TEACHERS(easysch_token?.school_uid, offset, 10),
      data: data,
    });
  };
  const [state, setState] = React.useState({
    first_name: "",
    last_name: "",
    religion: "",
    phone_number: "",
    address: "",
    date_of_birth: new Date(),
    email: "",
    gender: "",
    image: "",
    imageFile: "",
    role: "",
  });
  const handleDate = (date: Date) => {
    setState({ ...state, date_of_birth: date });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    SearchField({value:e.target.value, data: filteredData, setData: setFilteredData, initData:teachers})
  }
  const [open, setOpen] = React.useState(false);
  const handlePrevious = () => {
    setPage(old => Math.max(old - 1, 1))
}
const handleNext = () => {
  if (!isPreviousData && teacherList?.pagination?.next) {
    setPage(old => old + 1)
  }
}
  return (
    <>
        <Title title={'Staffs'} btn={{
          size: "md",
          value: "Add Staff",
          click: () => {},
          location: "end",
          Icon: FaUserPlus,
          disabled: false,
          type: "submit",
        }} />
        <TeacherTable teachers={teachers} />
    </>
  )
}
