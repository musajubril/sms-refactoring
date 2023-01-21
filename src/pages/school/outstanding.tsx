import jwtDecode from 'jwt-decode';
import React from 'react'
import { useQuery, useMutation } from 'react-query';
import { useToasts } from 'react-toast-notifications';
import { getRequest, postRequest } from '../../api/apiCall';
import { STUDENTBASIC, GETOUTSTANDING, ADDOUTSTANDING } from '../../api/apiUrl';
import { queryKeys } from '../../api/queryKey';

export default function Outstanding() {
  const easysch_token: { school_uid: any } = jwtDecode(
    localStorage?.easysch_token
  );
  const [state, setState] = React.useState({
    student_id: null,
    fee: ""
  })
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<any>();
  const { data: studentList } = useQuery(
    [queryKeys.getStudents, easysch_token?.school_uid],
    async () => await getRequest({ url: STUDENTBASIC(easysch_token?.school_uid) }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid,
    }
  );
  const { data: debtList } = useQuery(
    [queryKeys.getDebtors, easysch_token?.school_uid],
    async () => await getRequest({ url: GETOUTSTANDING(easysch_token?.school_uid) }),
    {
      retry: 2,
      enabled: !!easysch_token?.school_uid,
    }
  );
  const [students, setStudents] = React.useState(studentList?.data);
  const [debtors, setDebtors] = React.useState(debtList?.data);
  React.useEffect(() => {
    setStudents(studentList?.data);
    setDebtors(debtList?.data)
  }, [ studentList?.data, debtList?.data]);
  console.log(debtors)
  React.useEffect(() => {
    setState({
      ...state,
      student_id: value
    })
  }, [value])
  const data = students?.map((student: { full_name: any; id: any; }) => {
    const val = { label: student.full_name, value: student.id }
    return val
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      fee: e.target.value
    })
  }
  const { addToast } = useToasts();

  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      addToast(data?.message, {
        appearance: "success",
        autoDismiss: true,
      })
      setOpen(false);
      // cache.invalidateQueries();
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault()
    mutate({
      url: ADDOUTSTANDING(easysch_token?.school_uid, state.student_id),
      data: {
        amount: state.fee,
        student_id: state.student_id,
        bill_type: "debt",
        // unit: 1
      }
    })
  }
  return (
    <div>outstanding</div>
  )
}
