import jwtDecode from 'jwt-decode';
import React from 'react'
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { useToasts } from 'react-toast-notifications';
import { getRequest, postRequest } from '../../api/apiCall';
import { GETPAYMENTS, STUDENTBASIC, GETSTUDENTBILL, PAYMENTS } from '../../api/apiUrl';
import { queryKeys } from '../../api/queryKey';
import SearchField from '../../helpers/Search';
import { MdMoneyOff } from 'react-icons/md';
import SchoolLayout from '../../components/Layouts/school.layout';
import StudentTable from '../../components/Table/StudentTable';
import Title from '../../components/Title';
import { GiMoneyStack, GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import DataCard from '../../components/Cards/DataCard';
import HistoryTable from '../../components/Table/HistoryTable';

export default function History() {
    const { addToast } = useToasts();
    const [state, setState] = React.useState({
      full_name: "",
      amount: 0,
      student_id: "",
      current_class: { name: "" },
      fee: "",
      student_bill_id: "",
      amount_left: "",
      source: "",
    });
    const easysch_token: { school_uid: any } = jwtDecode(
      localStorage?.easysch_token
    );
    const { schoolSlug: school } = localStorage
    const [offset, setOffset] = React.useState(0)
    const { data: paymentHistory, isPreviousData, status, isFetching } = useQuery(
      [queryKeys.getPayments, easysch_token?.school_uid, offset],
      async () => await getRequest({ url: GETPAYMENTS(easysch_token?.school_uid, offset) }),
      {
        retry: 2,
        enabled: !!easysch_token?.school_uid,
        keepPreviousData : true
      }
    );
    const { data: studentList } = useQuery(
      [queryKeys.getStudents, easysch_token?.school_uid],
      async () => await getRequest({ url: STUDENTBASIC(easysch_token?.school_uid) }),
      {
        retry: 2,
        enabled: !!easysch_token?.school_uid,
      }
    );
    const { data: studentBillList } = useQuery(
      [queryKeys.getStudentBill, easysch_token?.school_uid, state?.student_id],
      async () => await getRequest({ url: GETSTUDENTBILL(easysch_token?.school_uid, state?.student_id) }),
      {
        retry: 2,
        enabled: !!easysch_token?.school_uid && !!state?.student_id
      }
    );
    const [bill, setBill] = React.useState(studentBillList?.data)
    React.useEffect(()=>{
      setBill(studentBillList?.data)
    },[studentBillList?.data]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    };
    const cache = useQueryClient();
    const { mutate } = useMutation(postRequest, {
      onSuccess(data) {
        addToast(data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
        setPaymentHistory([
          {
            id: state.student_id,
            student: {
              full_name: state.full_name,
              current_class: { name: state.current_class.name },
            },
            amount: state.amount,
            date_added: new Date(),
          },
          ...history,
        ]);
        setOpen(false);
        setState({
          ...state,
          full_name: "",
          amount: 0,
          student_id: "",
        });
        cache.invalidateQueries();
      },
    });
    const submitForm = (e: any) => {
      e.preventDefault();
      mutate({
        url: PAYMENTS(easysch_token?.school_uid),
        data: {
          student_id: state.student_id,
          payments: [
            {
              student_bill_id: state.student_bill_id,
              amount: state.amount,
              source: state.source,
            }
          ],
        },
      });
    };
    const [students, setStudents] = React.useState(studentList?.data);
    const [history, setPaymentHistory] = React.useState(paymentHistory?.data);
    const [filteredData, setFilteredData] = React.useState(paymentHistory?.data);
    React.useEffect(() => {
      setPaymentHistory(paymentHistory?.data);
      setFilteredData(paymentHistory?.data);
      setStudents(studentList?.data);
    }, [paymentHistory?.data, studentList?.data]);
  
  
  console.log(students)
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if(e.target.name==="student_bill_id"){
        const currentBill = bill?.filter((fee: { id: string; })=>fee.id==e.target.value)[0]
        console.log(e.target.value, currentBill);
        setState({
          ...state,
          student_bill_id: e.target.value,
          amount_left: (Number(currentBill.amount * currentBill.bill.unit) - Number(currentBill.amount_paid)).toString()
        })
      }
      else if(e.target.name==="source"){
        console.log(e.target.value);
        setState({
         ...state,
          source: e.target.value,
      })
    }
      else{
        const studentValue = students?.filter(
          (student: { id: string; }) => student.id === e.target.value
          );
          
          setState({
            ...state,
            [e.target.name]: e.target.value,
            current_class: { name: studentValue[0].current_class.name },
            full_name: studentValue[0].full_name,
          });
        }
    };
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      SearchField({
        value: e.target.value,
        data: filteredData,
        setData: setFilteredData,
        initData: history,
      });
    };
  
    const [page, setPage] = React.useState(1)
  React.useEffect(()=>{
    setOffset((page-1)*10)
  },[page])
    const [open, setOpen] = React.useState(false);
    const {role} = localStorage
    const handlePrevious = () => {
      setPage(old => Math.max(old - 1, 1))
  }
  const handleNext = () => {
    if (!isPreviousData && paymentHistory?.pagination?.next) {
      setPage(old => old + 1)
    }
  }
  return (
    <>
        <Title title={'Payment History'} btn={{
          size: "md",
          value: "Make Payment",
          click: () => {},
          location: "end",
          Icon: GiTakeMyMoney,
          disabled: false,
          type: "submit",
        }} />
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {
            [
                {title: "Total Amount Paid", value: '5000', icon: GiReceiveMoney},
                {title: "Total Amount Owing", value: '5000', icon: MdMoneyOff},
                {title: "Outstanding Debt For Last Term", value: '5000', icon: MdMoneyOff},
                {title: "Total Amount Expected", value: '5000', icon: GiTakeMyMoney},
            ].map((stat)=>(
                <DataCard title={stat.title} value={stat.value} key={stat.value} list={[]} Icon={GiMoneyStack} />            ))
            }
            </div>
        <HistoryTable histories={filteredData} />
    </>
  )
}
