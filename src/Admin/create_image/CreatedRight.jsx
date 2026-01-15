import React, { useState, useRef } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../utils/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addImages } from "../../redux/reducer/ImagesSlice";

const CreatedRight = () => {
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const fileInputRef = useRef(null);
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const validTypes = ["image/jpeg", "image/jpg", "image/webp", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPG, PNG, WEBP, or GIF file formats are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Maximum file size is 5MB");
        return;
      }
      setInputValue((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const validTypes = ["image/jpeg", "image/jpg", "image/webp", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPG, PNG, WEBP, or GIF file formats are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Maximum file size is 5MB");
        return;
      }
      setInputValue((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const imageCreateApi = async () => {
    try {
      setLoading(true);
      setErr(null);
      const formData = new FormData();
      formData.append("title", inputValue.title);
      formData.append("description", inputValue.description);
      formData.append("image", inputValue.image);

      const result = await instance.post("/image/create", formData, {
        withCredentials: true,
      });
      
      dispatch(addImages(result.data.data))
      toast.success(result.data.message);
      navigate("/admin/manage_image")
      setInputValue({
        title: "",
        description: "",
        image: null,
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const fieldsError = {};
        const err = error.response.data.errors;
        err.forEach((e) => {
          const fieldName = e.field || e.param || "unknown";
          fieldsError[fieldName] = e.message || e.msg;
        });
        setErr(fieldsError);
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Internal server error");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    imageCreateApi();
  };

  return (
    <div className="w-[85%] h-screen bg-zinc-100 px-5 py-4 overflow-y-auto">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-xl capitalize font-semibold tracking-tight leading-none pb-1.5">
            Create New Image
          </h1>
          <p className="text-md flex items-center leading-none mt-1  text-zinc-300">
            Dashboard <MdOutlineKeyboardArrowRight className="mt-0.5" /> Manage
            Images <MdOutlineKeyboardArrowRight className="mt-0.5" /> Create New
            Image
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl text-zinc-600">
            <IoMdNotificationsOutline />
          </span>
          <div className="w-12 h-12 bg-zinc-500 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white rounded shadow px-4 py-3 mt-7">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-2xl font-bold text-gray-900 mb-1">
              Title
            </label>
            <label className="block text-sm text-gray-600 mb-1  mt-3">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={inputValue.title}
              onChange={(e) =>
                setInputValue({ ...inputValue, title: e.target.value })
              }
              placeholder="Enter image title..."
              className={`w-full rounded border italic border-gray-300 bg-white py-1.5 px-2.5 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition ${
                err?.title ? "border-red-500" : ""
              }`}
              required
            />
            {err?.title && (
              <p className="text-red-600 text-[9px] mt-1 tracking-tight leading-none  font-semibold ">
                {err.title}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label className="block text-base font-semibold text-gray-900 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={inputValue.description}
              onChange={(e) =>
                setInputValue({ ...inputValue, description: e.target.value })
              }
              placeholder="Enter image description (optional)..."
              rows="3"
              className={`w-full resize-none rounded border italic border-gray-300 bg-white py-1.5 px-2.5 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition ${
                err?.description ? "border-red-500" : ""
              }`}
            />
             {err?.description && (
              <p className="text-red-600 text-[9px]  tracking-tight leading-none  font-semibold ">
                {err.description}
              </p>
            )}
          </div>
          <div className="mb-7 cursor-pointer">
            <label className="block text-base font-bold text-gray-900 mb-1">
              Upload Image *
            </label>
            <div
              className={`border-2 border-dashed rounded p-4 text-center transition-colors ${
                dragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-gray-50 hover:border-gray-400"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                onChange={handleFileChange}
                className="hidden "
              />
             
              <div className="flex flex-col items-center justify-center mb-3">
                <FaCloudUploadAlt className="w-16 h-16 text-gray-400 mb-2 " />
                <p className="text-base font-semibold text-gray-700 mb-2">
                  Drag & drop or click to upload
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Only JPG, PNG, WEBP, or GIF file formats are allowed.
                </p>
                <p className="text-sm text-gray-500">Maximum size: 5MB</p>
                {inputValue.image && (
                  <p className="text-sm text-green-600 font-semibold mt-2">
                    Selected: {inputValue.image.name}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6 mb-2">
            <button
              type="submit"
              className="bg-blue-600 cursor-pointer shadow hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded transition"
            >
              {loading ? (
                <div className="w-6 h-6 animate-spin border-b-2 border-t-2  rounded-full "></div>
              ) : (
                "Create Image"
              )}
            </button>
            <Link
              to="/admin/manage_image"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-9 py-2.5 rounded transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatedRight;
