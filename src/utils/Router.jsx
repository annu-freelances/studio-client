import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../User/home/Home";
import Login from "../Admin/auth/Login";
import Dashborad from "../Admin/dashborad/Dashborad";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Images from "../Admin/All_Images/Images";
import CreateImage from "../Admin/create_image/CreateImage";
import UpdatedImages from "../Admin/updated_image/UpdatedImages";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashbord"
          element={
            <ProtectedRoutes>
              <Dashborad />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin/manage_image"
          element={
            <ProtectedRoutes>
              <Images />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin/manage_image/create"
          element={
            <ProtectedRoutes>
              <CreateImage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/admin/manage_image/update/:id"
          element={
            <ProtectedRoutes>
              <UpdatedImages />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
