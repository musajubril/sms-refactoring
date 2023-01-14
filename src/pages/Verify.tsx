import React from "react";
import { useMutation, useQuery } from "react-query";
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useToasts } from "react-toast-notifications";
import { getSchool, postRequest } from "../api/apiCall";
import { GETSCHOOL, CHANGE_PASSWORD } from "../api/apiUrl";
import { queryKeys } from "../api/queryKey";
import { FaUserEdit } from "react-icons/fa";
import Input from "../components/FormFields/Input";
import IconButton from "../components/Buttons/IconButton";
import { WebFormImage, MobileFormImage } from "../components/Auth/FormImage";
import AuthForm from "../components/Auth/AuthForm";
export const getServerSideProps = (context: { query: { staff: any, school: any } }) => {
  const { staff, school } = context.query;

  return { props: { staff, school } };
};

export default function Verify() {
  const navigate = useNavigate()
  const { addToast } = useToasts();

  const { schoolSlug : school, verify_token : staff} = localStorage
  console.log(school)
  // const { id} = params
  // const staff = id
  // const school = slug
  const { data } = useQuery(
    [queryKeys.getSchool, school],
    async () => await getSchool({ url: GETSCHOOL(school) }),
    {
      retry: 2,
      enabled: !!school,
    }
  );
  const [schoolData, setSchoolData] = React.useState(data?.data);
   React.useEffect(() => {
    setSchoolData(data?.data);
  }, [data?.data]);
  const [staffData, setStaffData] = React.useState<any>()

React.useEffect(()=>{
    if(typeof window !== "undefined" && localStorage?.payload){
        setStaffData(JSON.parse(localStorage?.payload))
    }
},[])
//   const staffData: {uid: string, full_name: string} = typeof window !== "undefined" && jwtDecode(staff)
  
  const [state, setState] = React.useState<{
    confirm_password: string;
    password: string;
  }>({
    confirm_password: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const { mutate } = useMutation(postRequest, {
   onSuccess(data) {
    addToast(data?.message, {
        appearance: "success",
        autoDismiss: true,
      });
      
      navigate(`/${school}/login`, {replace: true})
    }
  });
  const submitForm = (e: any) => {
    e.preventDefault();
    mutate({
      url: CHANGE_PASSWORD(schoolData?.uid, staffData?.uid),
      data: {
        confirm_password: state.confirm_password,
        password: state.password,
      },
    });
  };
  return (
    <div className="grid max-w-6xl max-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
        <WebFormImage logo="https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg" />
    <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:px-8">
    <MobileFormImage logo="https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg" name={staffData?.full_name} title={()=>(
        <h2 className="mt-6 text-xl font-extrabold text-center text-gray-900">Please Change Your Password</h2>
    )} />
    <AuthForm
            inputs={[
              {
                label: "Enter New Password",
                type: "password",
                value: state.password,
                change: handleChange,
                required: true,
                id: "password",
                placeholder: "",
                description:
                  "Enter a new password for your account",
                icon: null,
                disabled: false,
              },
              {
                label: "Confirm New Password",
                type: "password",
                value: state.confirm_password,
                change: handleChange,
                required: true,
                id: "confirm_password",
                placeholder: "",
                description: "Make sure confirm password matches your password",
                icon: null,
                disabled: false,
              },
            ]}
            submit={submitForm}
            url={null}
            btn={{
              size: "md",
              value: "Change Password",
              click: () => {},
              location: "end",
              Icon: FaUserEdit,
              disabled: false,
              type: "submit",
            }}
          />
    </div>
    </div>
  )
}
