import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OTP from "../pages/OTP";
import Verify from "../pages/Verify";
import Classes from "../pages/school/classes";
import ClassStundents from "../pages/school/class/students";
import ClassCourses from "../pages/school/class/courses";
import ClassBill from '../pages/school/class/Bill';
import Students from "../pages/school/students";

export const AuthRoutes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:slug/login" element={<Login />} />
    <Route path="/:slug/otp" element={<OTP />} />
    <Route path="/verify" element={<Verify />} />
    <Route path="/classes" element={<Classes />} />
    <Route path="/classes/:classId/students" element={<ClassStundents />} />
    <Route path="/classes/:classId/courses" element={<ClassCourses />} />
    <Route path="/classes/:classId/bill" element={<ClassBill />} />
    <Route path="/students" element={<Students />} />
    
    <Route path="*" element={<Home />}></Route>
  </Routes>
);
