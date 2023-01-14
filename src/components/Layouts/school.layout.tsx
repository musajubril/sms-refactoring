import React from 'react'
import {FaDollarSign, FaCogs, FaBuilding, FaUserFriends, FaUserGraduate, FaBookOpen, FaCashRegister, FaListAlt, FaSms, FaAsterisk, FaMoneyBillWave} from "react-icons/fa"
import Layout from '../Layout';

export default function SchoolLayout({children}: {children: any}) {
    const navigations = [
        { name: "Dashboard", href: "/", icon: FaCogs, current: true },
        {
          name: "Classes",
          href: "/classes",
          icon: FaBuilding,
          current: false,
        },
        {
          name: "Students",
          href: "/students",
          icon: FaUserFriends,
          current: false,
        },
        {
          name: "Staffs",
          href: "/staffs",
          icon: FaUserGraduate,
          current: false,
        },
        {
          name: "Courses",
          href: "/courses",
          icon: FaBookOpen,
          current: false,
        },
        {
          name: "Payment History",
          href: "/fees",
          icon: FaCashRegister,
          current: false,
        },
        {
          name: "Bills",
          href: "/bill",
          icon: FaListAlt,
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
        {
          name: "Scratch Card Pin",
          href: "/pin",
          icon: FaAsterisk,
        },
        {
          name: "Messages",
          href: "/sms",
          icon: FaSms,
          current: false,
        }
      ];
  return (
    <Layout navs={navigations}>
      {children}
    </Layout>
  )
}
