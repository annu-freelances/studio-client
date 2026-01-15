import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCamera } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import instance from "../utils/axios";
import { toast } from "react-toastify";
import { setAdmin } from "../redux/reducer/AdminSlice";

const LeftDashborad = () => {
  const admin = useSelector((store) => store.admin.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutApi = async () => {
    try {
      const result = await instance.delete("/logout", {
        withCredentials: true,
      });
      toast.success(result.data.message);
      navigate("/admin/login");
      dispatch(setAdmin(null));
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Logout failed. Please try again.";
      toast.error(errorMessage);
      console.error(error);
    }
  };

  const handleClicked = () => {
    logoutApi();
  };

  return (
    <div className="w-[15%] h-screen bg-[#252C34]   ">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700 ">
        <span className="text-zinc-500 text-3xl">
          <IoCamera />
        </span>
        <h1 className="text-xl capitalize text-white font-bold tracking-tight leading-none">
          admin pannel
        </h1>
      </div>

      <div className="h-[78%] border-b py-4 px-2  border-zinc-700 flex flex-col  ">
        <NavLink
          to="/admin/dashbord"
          className={({ isActive }) =>
            `px-4 font-semibold  flex  items-center py-3 rounded gap-2.5 ${
              isActive ? "text-white bg-[#3c424a]" : "text-zinc-400"
            }`
          }
        >
          <span className="text-xl">
            <IoMdHome />
          </span>
          <h1 className="text-md capitalize tracking-tight leading-none">
            dashboard
          </h1>
        </NavLink>

        <NavLink
          to="/admin/manage_image"
          className={({ isActive }) =>
            `px-4 font-semibold flex items-center py-3 rounded gap-2.5 ${
              isActive ? "text-white bg-[#3c424a]" : "text-zinc-400"
            }`
          }
        >
          <span className="text-xl ">
            <FaImages />
          </span>
          <h1 className="text-md capitalize tracking-tight leading-none">
            manage images
          </h1>
        </NavLink>
        <NavLink
          to="/admin/setting"
          className={({ isActive }) =>
            `px-4 font-semibold flex items-center py-3 rounded gap-2.5 ${
              isActive ? "text-white bg-[#3c424a]" : "text-zinc-400"
            }`
          }
        >
          <span className="text-xl ">
            <IoIosSettings />
          </span>
          <h1 className="text-md capitalize tracking-tight leading-none">
            setting
          </h1>
        </NavLink>
        <button
          onClick={handleClicked}
          className="text-zinc-100 cursor-pointer  hover:bg-red-800 bg-red-500 px-4 flex font-semibold items-center justify-center py-3 rounded gap-2.5  "
        >
          <span className="text-xl rotate-270 ">
            <IoMdLogOut />
          </span>
          <h1 className="text-md capitalize tracking-tight leading-none">
            logout
          </h1>
        </button>
      </div>

      <div className="px-4 py-5 flex items-center justify-between">
        <h1 className="text-md font-semibold text-white capitalize leading-none tracking-tight text-[2.4vh] ">
          welcome, {admin?.fullName}
        </h1>
        <span className="text-xl text-white">
          <FaUserLarge />
        </span>
      </div>
    </div>
  );
};

export default LeftDashborad;
