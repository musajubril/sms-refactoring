import { Link, useNavigate, useParams } from 'react-router-dom';
import React from "react";
import { useMutation, useQuery } from "react-query";
import { useToasts } from "react-toast-notifications";


import { getSchool, postOtp } from '../api/apiCall';
import { GETSCHOOL, VERIFY_OTP } from '../api/apiUrl';
import { queryKeys } from '../api/queryKey';
import { FaAsterisk, FaPhoneAlt, FaUserCheck } from 'react-icons/fa';
import { OTPType } from '../Interfaces/Auth';
import { MobileFormImage, WebFormImage } from '../components/Auth/FormImage';
import AuthForm from '../components/Auth/AuthForm';


export default function OTP() {
    const { addToast } = useToasts();
  const params = useParams()
  const navigate = useNavigate();

  const school = params?.slug
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
  
  const [state, setState] = React.useState<OTPType>({
    phone_number: "",
    otp: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };
  const { mutate } = useMutation(postOtp, {
    onSuccess(data) {
        addToast(data?.message, {
            appearance: "success",
            autoDismiss: true,
          });
      
      const payload = {full_name: data?.data?.full_name,
        uid: data?.data?.uid,
        image: data?.data?.image}
      localStorage.setItem("payload", JSON.stringify(payload))
      if(school){
          localStorage.setItem("schoolSlug", school)
        }
        navigate(`/verify`, { replace: true });
    },
    
  });
  const submitForm = (e: any) => {
    e.preventDefault();
    mutate({
      url: VERIFY_OTP(schoolData?.uid),
      data: {
        phone_number: state.phone_number,
        otp: state.otp,
      },
    });
  };
  return (
    <div className="grid max-w-6xl max-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
      <WebFormImage logo="https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg" />
        <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:px-8">
          <MobileFormImage logo="https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg" name="Verify Your Account" title={()=>(
            <>
            <h2 className="mt-1 text-xl text-center text-gray-900">Or <span className="text-sm text-indigo-600"><Link to={`/${school}/login`}>Sign In To Your Account</Link></span></h2>
            </>
          )} />
          <AuthForm
            inputs={[
              {
                label: "Enter Phone Number",
                type: "text",
                value: state.phone_number,
                change: handleChange,
                required: true,
                id: "phone_number",
                placeholder: "e.g 09078044747",
                description:
                "Mobile number attached to your account",
                icon: FaPhoneAlt,
                disabled: false,
              },
              {
                label: "Enter OTP",
                type: "text",
                value: state.otp,
                change: handleChange,
                required: true,
                id: "otp",
                placeholder: "",
                description: "OTP attached to your account",
                icon: FaAsterisk,
                disabled: false,
              },
            ]}
            submit={submitForm}
            url={`/${school}/otp`}
            btn={{
              size: "md",
              value: "Verify",
              click: () => {},
              location: "end",
              Icon: FaUserCheck,
              disabled: false,
              type: "submit",
            }}
          />
    </div>
    </div>
  )
}
