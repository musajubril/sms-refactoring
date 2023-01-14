import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import jwtDecode from "jwt-decode";
import { useToasts } from "react-toast-notifications";
import { getRequest, postRequest } from "../../api/apiCall";
import { HOMEROOMS } from "../../api/apiUrl";
import { queryKeys } from "../../api/queryKey";
import SchoolLayout from "../../components/Layouts/school.layout";
import Title from "../../components/Title";
import { FaBuilding } from "react-icons/fa";
import StatCard from "../../components/Cards/StatCard";

export default function SchoolClasses() {
    const { addToast } = useToasts();

    const easysch_token: { school_uid: any } = jwtDecode(
      localStorage?.easysch_token
    );
    const { schoolSlug: school } = localStorage

    const { data: homerooms } = useQuery(
      [queryKeys.getClasses, easysch_token?.school_uid],
      async () => await getRequest({ url: HOMEROOMS(easysch_token?.school_uid) }),
      {
        retry: 2,
        enabled: !!easysch_token?.school_uid,
      }
    );
    const [state, setState] = React.useState({
      name: "",
    });
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
        setRooms([...rooms, { name: data?.data.name, id: data?.data.id }]);
        setOpen(false);
        setState({
          name: "",
        });

        cache.invalidateQueries();
      },
    });
    const submitForm = (e: any) => {
      e.preventDefault();
      mutate({
        url: HOMEROOMS(easysch_token?.school_uid),
        data: {
          name: state.name,
        },
      });
    };
    const [rooms, setRooms] = React.useState(homerooms?.data);
    const roomval = homerooms?.data;
    React.useEffect(() => {
      setRooms(roomval);
    }, [roomval]);
    const [open, setOpen] = React.useState(false);
  return (
    <SchoolLayout>
      <Title
        title="Classes"
        btn={{
          size: "md",
          value: "Add Class",
          click: () => {},
          location: "end",
          Icon: FaBuilding,
          disabled: false,
          type: "submit",
        }}
      />
      <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {rooms?.map(
          (room: { name: string; id: React.Key | null | undefined; }, i: any) => (
            <StatCard title={""} value={room?.name} key={room?.id} list={[
                {name: "Students", url: `${room?.id}/students`},
                {name: "Courses", url: `${room?.id}/courses`},
                {name: "Bill", url: `${room?.id}/bill`},
            ]} />
          )
        )}
      </div>
    </SchoolLayout>
  );
}
