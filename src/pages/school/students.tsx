import React from 'react'
import { StudentType } from '../../Interfaces/Student';
import jwtDecode from 'jwt-decode';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { useToasts } from 'react-toast-notifications';
import { getRequest, postRequest } from '../../api/apiCall';
import { HOMEROOMS, STUDENTS } from '../../api/apiUrl';
import { queryKeys } from '../../api/queryKey';
import SchoolLayout from '../../components/Layouts/school.layout';
import Title from '../../components/Title';
import { FaUserPlus } from 'react-icons/fa';
import StudentTable from '../../components/Table/StudentTable';

export default function Students() {
    const { addToast } = useToasts();
    const { schoolSlug: school } = localStorage;

    const easysch_token: { school_uid: any } = jwtDecode(
      localStorage?.easysch_token
    );
    const { data: homerooms } = useQuery(
      [queryKeys.getClasses, easysch_token?.school_uid],
      async () => await getRequest({ url: HOMEROOMS(easysch_token?.school_uid) }),
      {
        retry: 2,
        enabled: !!easysch_token?.school_uid,
      }
    );
    const [offset, setOffset] = React.useState(0)
    const { data: studentList, isPreviousData, status, isFetching } = useQuery(
      [queryKeys.getStudents, easysch_token?.school_uid, offset],
      async () => await getRequest({ url: STUDENTS(easysch_token?.school_uid, offset) }),
      {
        retry: 2,
        enabled: !!easysch_token?.school_uid,
        keepPreviousData : true
      }
    );
    const [rooms, setRooms] = React.useState(homerooms?.data);
    const [students, setStudents] = React.useState(studentList?.data);
    const [filteredData, setFilteredData] = React.useState(studentList?.data);
    React.useEffect(() => {
      setRooms(homerooms?.data);
      setStudents(studentList?.data);
      setFilteredData(studentList?.data);
    }, [homerooms?.data, studentList?.data]);
  const [page, setPage] = React.useState(1)
  React.useEffect(()=>{
    setOffset((page-1)*10)
  },[page])
    const cache = useQueryClient();
    const { mutate } = useMutation(postRequest, {
      onSuccess(data) {
        addToast(data?.message, {
                        appearance: "success",
                        autoDismiss: true,
                      });
        setStudents([
          ...students,
          {
            full_name: data?.data.full_name,
            image: data?.data.image,
            gender: data?.data.gender,
            email: data?.data.email,
            current_class: { name: data?.data.current_class.name },
            age: data?.data.age,
            is_debtor: data?.data.is_debtor,
            id: data?.data.id,
          },
        ]);
        setOpen(false);
        setState({
          first_name: "",
          last_name: "",
          religion: "",
          middle_name: "",
          guardian_full_name: "",
          phone_number: "",
          phone_number2: "",
          address: "",
          state_of_origin: "",
          date_of_birth: new Date(),
          email: "",
          lga: "",
          outstanding_debt: 0,
          class_id: "",
          gender: "",
          guardian_name: "",
          image: "",
          imageFile: "",
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
      data.append("middle_name", state.middle_name);
      data.append("guardian_full_name", state.guardian_full_name);
      data.append("phone_number", state.phone_number);
      data.append("phone_number2", state.phone_number2);
      data.append("address", state.address);
      data.append("state_of_origin", state.state_of_origin);
      data.append("date_of_birth", state.date_of_birth.toString());
      data.append("email", state.email);
      data.append("outstanding_debt", state.outstanding_debt.toString());
      data.append("image", state.image);
      data.append("class_id", state.class_id);
      data.append("gender", state.gender);
      mutate({
        url: STUDENTS(easysch_token?.school_uid, offset),
        data: data,
      });
    };
  
    const [state, setState] = React.useState<StudentType>({
      first_name: "",
      last_name: "",
      religion: "",
      middle_name: "",
      guardian_full_name: "",
      phone_number: "",
      phone_number2: "",
      address: "",
      state_of_origin: "",
      lga: "",
      date_of_birth: new Date(),
      email: "",
      outstanding_debt: 0,
      class_id: "",
      gender: "",
      guardian_name: "",
      image: "",
      imageFile: "",
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
    const [open, setOpen] = React.useState(false);
    const handlePrevious = () => {
        setPage(old => Math.max(old - 1, 1))
    }
    const handleNext = () => {
      if (!isPreviousData && studentList?.pagination?.next) {
        setPage(old => old + 1)
      }
    }
  return (
    <SchoolLayout>
        <Title title={'Students'} btn={{
          size: "md",
          value: "Add Student",
          click: () => {},
          location: "end",
          Icon: FaUserPlus,
          disabled: false,
          type: "submit",
        }} />
        <StudentTable students={students} />
    </SchoolLayout>
  )
}
