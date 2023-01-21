import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import BursarLayout from "../components/Layouts/bursar.layout";
import History from "../pages/school/history";
import Outstanding from "../pages/school/outstanding";
import Classes from "../pages/school/classes";

export const BursarRoutes = (
  <BursarLayout>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/classes" element={<Classes drop={[
      {name: "Students", url: `/students`},
      {name: "Courses", url: `/courses`},
      {name: "Bill", url: `/bill`}
    ]} />} />
    <Route path="/fees" element={<History />} />
    <Route path="/debt" element={<Outstanding />} />

    
    <Route path="*" element={<Home />}></Route>
  </Routes>
  </BursarLayout>
);
