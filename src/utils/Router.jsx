import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../User/home/Home";
import Login from "../Admin/auth/Login";
import Dashborad from "../Admin/dashborad/dashborad";
import ProtectedRoutes from "../components/ProtectedRoutes";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashbord" element={<ProtectedRoutes><Dashborad /></ProtectedRoutes>} />
      </Routes>
    </div>
  );
};

export default Router;
