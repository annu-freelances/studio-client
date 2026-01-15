import React from "react";
import { useSelector } from "react-redux";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Image } from "lucide-react";
import { GrCheckmark } from "react-icons/gr";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const RightDashborad = () => {
  const { admin } = useSelector((store) => store.admin);
  const { images } = useSelector((store) => store.Image);

  const sortedImages = [...images].sort((a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt)
  );
  const totalImages = images.length;
  const activeImages = images.filter(
    (img) => img.status === "active" || img.status === "approved"
  ).length;
  const pendingImages = images.filter((img) => img.status === "pending").length;
 
  let lastUploadedLabel = "-";
  if (sortedImages.length > 0) {
    const last = sortedImages[0];
    if (last?.createdAt) {
      const lastDate = new Date(last.createdAt);
      const now = new Date();
      const diff = (now - lastDate) / 1000;
      if (diff < 60) lastUploadedLabel = "just now";
      else if (diff < 3600) lastUploadedLabel = `${Math.floor(diff / 60)} minutes ago`;
      else if (diff < 3600 * 24) lastUploadedLabel = `${Math.floor(diff / 3600)} hours ago`;
      else lastUploadedLabel = `${Math.floor(diff / (3600 * 24))} days ago`;
    }
  }

  const adminLocalData = [
    {
      title: "total images",
      icon: <Image className="w-7 h-7" />,
      value: totalImages,
      bg: "bg-blue-300",
    },
    {
      title: "active images",
      icon: <GrCheckmark className="text-2xl" />,
      value: activeImages,
      bg: "bg-green-500",
    },
    {
      title: "pending reviews",
      icon: <MdOutlinePendingActions className="text-2xl" />,
      value: pendingImages,
      bg: "bg-amber-200",
    },
    {
      title: "last uploaded",
      icon: <FaCloudUploadAlt className="text-2xl" />,
      value: lastUploadedLabel,
      bg: "bg-blue-900",
    },
  ];

  const adminActivity = [
    {
      icon: <FaClock className="text-2xl" />,
      title: "Logged in to the admin panel",
    },
    {
      icon: <GrAdd className="text-2xl  rounded-full text-white p-1 bg-green-500 " />,
      title: "Added a new Image: Sunset at Beach",
    },
    {
      icon: <RiDeleteBinLine className="text-2xl     " />,
      title: "deleted an Image: Old Portrait",
    },
    {
      icon: <GrCheckmark className="text-2xl  rounded-full text-white p-1 bg-green-500 " />,
      title: "Reviewed a Pending Image",
    },
  ];

  const latestFourImages = sortedImages.slice(0, 4);

  return (
    <div className="w-[85%] h-screen bg-zinc-100  px-5 py-2 ">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl capitalize font-bold tracking-tight leading-none pb-1.5 ">
            welcome, {admin?.fullName}
          </h1>
          <p className="text-md font-semibold text-zinc-400 ">
            Here is an overview of your portfolio.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl">
            <IoMdNotificationsOutline />
          </span>
          <div className="w-12 h-12 bg-zinc-500 rounded-full "></div>
        </div>
      </div>
      <div className="p-2 bg-white shadow rounded mt-3 flex items-center justify-between">
        {adminLocalData.map((data, idx) => (
          <div
            key={idx}
            className="shadow w-1/5 p-2 gap-3.5 flex items-start justify-start bg-white "
          >
            <span
              className={`w-10 h-10 flex items-center justify-center ${data.bg} text-white rounded-full`}
            >
              {data.icon}
            </span>
            <div className="-mt-1">
              <h1 className="text-md capitalize font-bold">{data.title}</h1>
              <p>{data.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white  mt-3 rounded shadow">
        <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-200  ">
          <h1 className="text-md capitalize font-bold tracking-tight leading-none">
            recent images
          </h1>
          <Link
            to="/admin/manage_image"
            className="border px-2 py-0.5 gap-2 rounded border-zinc-300 flex items-center text-blue-500 capitalize font-semibold"
          >
            view all
            <span className="mt-0.5 ">
              <MdOutlineKeyboardArrowRight />
            </span>
          </Link>
        </div>
        <div className="p-3 flex flex-wrap items-center justify-center gap-3 ">
          {latestFourImages.length === 0 ? (
            <div className="w-full text-center text-zinc-400 p-4">
              No images to display.
            </div>
          ) : (
            latestFourImages.map((img) => (
              <div
                key={img._id || Math.random()}
                className="w-[24%] overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  className="w-full h-38 object-cover object-center "
                  src={
                    img.imageUrl ||
                    "https://images.unsplash.com/photo-1767859306038-4a5f26e8f324?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={img.title || "image"}
                />
                <div className="px-3 p-1.5">
                  <h1 className="capitalize font-semibold border-b pb-1.5 border-zinc-300 ">
                    {img.title || "No Title"}
                  </h1>
                  <p className="font-semibold text-zinc-300 capitalize pt-2 pb-2 leading-none tracking-tight ">
                    uploaded:{" "}
                    {img.createdAt
                      ? `${new Date(img.createdAt).toLocaleDateString()} ${new Date(img.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                      : "unknown"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className=" bg-white mt-3 rounded">
        <h1 className="px-3 py-2 border-b border-zinc-200 text-xl capitalize font-bold tracking-tight leading-none">
          admin activity
        </h1>
        {adminActivity.map((data, idx) => (
          <div key={idx} className="px-3 py-2.5 flex items-center gap-3 border-b border-zinc-200">
            <span>{data.icon}</span>
            <h1 className="font-semibold -mt-0.5 tracking-tight text-zinc-600 leading-none">
              {data.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightDashborad;
