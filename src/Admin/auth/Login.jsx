import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../utils/axios";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAdmin } from "../../redux/reducer/AdminSlice";

const Login = () => {
  const [showpassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const navigate =  useNavigate()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [adminInput, setAdminInput] = useState({
    email: "",
    password: "",
  });

  const adminLoginApi = async () => {
    try {
      setLoading(true);
      setError("");
      const result = await instance.post("/login", adminInput, {
        withCredentials: true,
      });
      dispatch(setAdmin(result.data.result))
      toast.success(result.data.message);
      setAdminInput({
        email: "",
        password: "",
      });
      navigate("/admin/dashbord")
    } catch (error) {
      // Show error returned by API if available
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      } else if (error.message) {
        setError(error.message);
        toast.error(error.message);
      } else {
        setError("Internal server error");
        toast.error("Internal server error");
      }
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    adminLoginApi();
  };

  const clickhandler = (e) => {
    e.preventDefault();

    setShowPassword((prev) => !prev);
  };
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-full object-cover"
        src="/back.png"
        alt="Background"
        loading="lazy"
        draggable={false}
        style={{ userSelect: "none" }}
      />
      <div className="w-[60vh] rounded-xl shadow-2xl bg-zinc-100 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="w-[13vh] h-[13vh] rounded-full overflow-hidden shadow-2xl shadow-gray-400 bg-white left-1/2 -translate-x-1/2 relative -top-12">
          <img
            className="w-full h-full object-cover object-center "
            src="/photo1.jpg"
            alt="Background"
            loading="lazy"
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>
        <h1 className="text-3xl capitalize tracking-tight leading-none -mt-9 text-center font-bold">
          Admin login
        </h1>
        <p className="text-center mt-2 text-zinc-400 text-sm font-semibold">
          Sign in to your Account
        </p>

        <form className="w-full mt-6" onSubmit={submitHandler}>
          <div className="relative w-full">
            {/* Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-5 h-5 text-gray-700" />
            </div>

            {/* Input */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="  w-full  rounded-xl border border-gray-300  bg-white  py-3 pl-11 pr-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition"
              autoComplete="email"
              value={adminInput.email}
              onChange={(e) =>
                setAdminInput({ ...adminInput, email: e.target.value })
              }
            />
          </div>

          {/* password */}
          <div className="relative w-full mt-3">
            {/* Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-5 h-5 text-gray-700" />
            </div>

            {/* Input */}
            <input
              type={showpassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              className="  w-full  rounded-xl border border-gray-300  bg-white  py-3 pl-11 pr-4 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition"
              autoComplete="email"
              value={adminInput.password}
              onChange={(e) =>
                setAdminInput({ ...adminInput, password: e.target.value })
              }
            />

            <button
              type="button"
              onClick={clickhandler}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 focus:outline-none"
              tabIndex={-1}
              aria-label={showpassword ? "Hide password" : "Show password"}
            >
              {showpassword ? (
                <FaRegEyeSlash />
              ) : (
                <FaRegEye />
              )}
            </button>
          </div>

          <p className="text-md text-blue-700 capitalize font-semibold my-1 text-right">
            forgot password?
          </p>

          <button
            type="submit"
            className="w-full bg-blue-700 flex items-center justify-center text-white font-semibold py-2.5 rounded hover:bg-blue-800 transition"
            disabled={loading}
          >
            {loading ? (
                <div className="w-6 h-6 animate-spin border-b-2 border-t-2  rounded-full "></div>
            ) : (
              "login"
            )}
          </button>
          {error && (
            <h1 className="text-[12px] mt-2 text-red-600 text-center font-semibold ">
              **{error}**
            </h1>
          )}
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300 self-center" />
          <span className="mx-3 text-gray-700 font-medium flex -mt-1 items-center justify-center">
            or
          </span>
          <div className="flex-grow h-px bg-gray-300 self-center" />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              name="remember"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-900 font-semibold">
              Remember me
            </span>
          </label>

          <Link to="/" className="text-blue-800 font-semibold">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
