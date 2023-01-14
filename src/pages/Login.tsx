import React from "react";
import { useParams, useNavigate } from "react-router";
import { getSchool, login } from "../api/apiCall";
import { GETSCHOOL, LOGIN_URL } from "../api/apiUrl";
import { queryKeys } from "../api/queryKey";
import { useMutation, useQuery } from "react-query";
import jwtDecode from "jwt-decode";
import { useToasts } from "react-toast-notifications";
import { FaMailBulk, FaEye, FaSignInAlt } from "react-icons/fa";
import { LoginType } from "../Interfaces/Auth";
import AuthForm from "../components/Auth/AuthForm";
import { MobileFormImage, WebFormImage } from "../components/Auth/FormImage";

export default function Login() {
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const params = useParams();
  const school = params.slug;
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
  const [state, setState] = React.useState<LoginType>({
    email: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(state);
    setState({ ...state, [event.target.id]: event.target.value });
  };
  const { mutate } = useMutation(login, {
    onSuccess() {
      addToast("Login Successful", {
        appearance: "success",
        autoDismiss: true,
      });
      localStorage.setItem("schoolId", schoolData?.uid);
      localStorage.setItem("schoolName", schoolData?.name);
      localStorage.setItem("schoolLogo", schoolData?.logo);
      if (school) {
        localStorage.setItem("schoolSlug", school);
      }
      const token = localStorage?.getItem("easysch_token");
      const easysch_token: false | "" | { groups: string[] } | null =
        typeof window !== "undefined" && token && jwtDecode(token);
      if (easysch_token) {
        if (easysch_token?.groups.length === 2) {
          // TODO: Fix after BEc exam Dialog state isn't updating for some weird reason
          localStorage.setItem("role", "both");
          navigate(`/`, { replace: true });
        }
        if (easysch_token?.groups.length === 1) {
          if (easysch_token?.groups[0] === "Teacher") {
            localStorage.setItem("role", "teacher");
            navigate(`/`, { replace: true });
          }
          if (easysch_token?.groups[0] === "Bursar") {
            localStorage.setItem("role", "bursar");
            navigate(`/`, { replace: true });
          }
          if (easysch_token?.groups[0] === "Secretary") {
            localStorage.setItem("role", "secretary");
            navigate(`/`, { replace: true });
          }
          if (easysch_token?.groups[0] === "Owner") {
            localStorage.setItem("role", "owner");
            navigate(`/`, { replace: true });
          }
        }
      }
    },
  });
  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(state);
    mutate({
      url: LOGIN_URL(schoolData?.uid),
      data: {
        username: state.email,
        password: state.password,
        school_id: schoolData?.uid,
      },
    });
  };
  return (
      <div className="grid max-w-6xl max-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
        <WebFormImage logo={schoolData?.logo} />
        <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:px-8">
          <MobileFormImage logo={schoolData?.logo} name={schoolData?.name} title="Sign In" />
          <AuthForm
            inputs={[
              {
                label: "Phone Number Or Email Address",
                type: "text",
                value: state.email,
                change: handleChange,
                required: true,
                id: "email",
                placeholder: "",
                description:
                  "Email address or mobile number attached to your account",
                icon: FaMailBulk,
                disabled: false,
              },
              {
                label: "Password",
                type: "password",
                value: state.password,
                change: handleChange,
                required: true,
                id: "password",
                placeholder: "",
                description: "Password attached to your account",
                icon: FaEye,
                disabled: false,
              },
            ]}
            submit={submitForm}
            url={`/${school}/otp`}
            btn={{
              size: "md",
              value: "Login",
              click: () => {},
              location: "end",
              Icon: FaSignInAlt,
              disabled: false,
              type: "submit",
            }}
          />
        </div>
      </div>
  );
}
