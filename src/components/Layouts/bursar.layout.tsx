import {FaDollarSign, FaCogs, FaUserFriends, FaUserGraduate, FaBookOpen, FaSms, FaAsterisk, FaMoneyBillWave} from "react-icons/fa"
import { BiBuildingHouse } from "react-icons/bi"
import { GiTakeMyMoney } from "react-icons/gi"
import { BsListCheck } from "react-icons/bs"
import Layout from '../Layout';

export default function BursarLayout({children}: {children: any}) {
    const navigations = [
        { name: "Dashboard", href: "/", icon: FaCogs, current: true },
        {
          name: "Classes",
          href: "/classes",
          icon: BiBuildingHouse,
          current: false,
        },
        {
          name: "Payment History",
          href: "/fees",
          icon: GiTakeMyMoney,
          current: false,
        },
        {
          name: "Bills",
          href: "/bill",
          icon: BsListCheck,
          current: false,
        },
      
        {
          name: "Debt",
          href: "/debt",
          icon: FaMoneyBillWave,
          current: false,
        },
        {
          name: "Discount",
          href: "/discount",
          icon: FaDollarSign,
        },
      ];
  return (
    <Layout navs={navigations}>
      {children}
    </Layout>
  )
}
