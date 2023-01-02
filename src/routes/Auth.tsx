import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const AuthRoutes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:slug/login" element={<Login />} />
    
    <Route path="*" element={<Home />}></Route>
  </Routes>
);
