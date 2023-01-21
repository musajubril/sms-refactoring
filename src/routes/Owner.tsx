import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OTP from "../pages/OTP";
import Verify from "../pages/Verify";
import Classes from "../pages/school/classes";
import ClassStundents from "../pages/school/class/students";
import ClassCourses from "../pages/school/class/courses";
import ClassBill from "../pages/school/class/Bill";
import Students from "../pages/school/students";
import StudentProfile from "../pages/school/student/profile";
import Teachers from "../pages/school/teachers";
import Courses from "../pages/school/courses";
import History from "../pages/school/history";
import Outstanding from "../pages/school/outstanding";
import SchoolLayout from "../components/Layouts/school.layout";

export const OwnerRoutes = (
  <SchoolLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug/login" element={<Login />} />
      <Route path="/:slug/otp" element={<OTP />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/classes" element={<Classes drop={[
      {name: "Students", url: `/students`},
      {name: "Courses", url: `/courses`},
      {name: "Bill", url: `/bill`}
    ]} />} />
      <Route path="/classes/:classId/students" element={<ClassStundents />} />
      <Route path="/classes/:classId/courses" element={<ClassCourses />} />
      <Route path="/classes/:classId/bill" element={<ClassBill />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/:studentId/profile" element={<StudentProfile />} />
      <Route path="/staffs" element={<Teachers />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/fees" element={<History />} />
      <Route path="/debt" element={<Outstanding />} />

      <Route path="*" element={<Home />}></Route>
    </Routes>
  </SchoolLayout>
);
