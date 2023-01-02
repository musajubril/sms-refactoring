import { Routes, Route } from "react-router";
import Home from "../pages/Home";

export const TeacherRoutes = (
  <Routes>
    <Route path="/" element={<Home />} />
    
    <Route path="*" element={<Home />}></Route>
  </Routes>
);
