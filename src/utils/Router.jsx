import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../User/home/Home";
import Login from "../Admin/auth/Login";
import Dashborad from "../Admin/dashborad/Dashborad";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Images from "../Admin/All_Images/Images";
import CreateImage from "../Admin/create_image/CreateImage";
import UpdatedImages from "../Admin/updated_image/UpdatedImages";
import Register from "../Admin/auth/register";
import Customer from "../Admin/customer/Customer";
import CreateCustomer from "../Admin/customer/create_customer/CreateCustomer";
import UpdateCustomer from "../Admin/customer/update_customer/UpdateCustomer";
import Booking from "../Admin/booking/Booking";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<Register />} />
        <Route
          path="/admin/dashboard"
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

        <Route
          path="/admin/customers"
          element={
            <ProtectedRoutes>
              <Customer />
            </ProtectedRoutes>
          }
        />

        <Route path="admin/customers/customer_create" element={<ProtectedRoutes><CreateCustomer /></ProtectedRoutes>} />
        <Route path="admin/customers/customer_update/:customerId" element={<ProtectedRoutes><UpdateCustomer /></ProtectedRoutes>} />
        <Route path="admin/booking" element={<ProtectedRoutes><Booking /></ProtectedRoutes>} />
      </Routes>
    </div>
  );
};

export default Router;
