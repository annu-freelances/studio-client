import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import instance from "../../utils/axios";
import { removeImages, setImages } from "../../redux/reducer/ImagesSlice";
import { toast } from "react-toastify";

const RightImages = () => {
  const { admin } = useSelector((store) => store.admin);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const itemsPerPage = 4;
  const { images  } = useSelector((store) => store.Image);

  const filteredData = images.filter(
    (item) =>
      (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleEdit = (id) => {
    console.log("Edit image:", id);
  };

  const deleteImageApi = async (id) => {
    try {
      const result = await instance.delete(`/image/delete/${id}`, {
        withCredentials: true,
      });
      toast.success(result.data.message);
      dispatch(removeImages(id))
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        console.error(error);
      }
    } 
  };

  const handleDelete = (id) => {
    deleteImageApi(id);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const allFetchImagesApi = async () => {
      try {
        const result = await instance.get("/image/read", {
          withCredentials: true,
        });
        dispatch(setImages(result.data.data));
      } catch (error) {
        // Only show API error alert/console message
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          console.error("An error occurred while fetching images.", error);
        }
      }
    };

    allFetchImagesApi();
  }, [admin]);

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded border ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50"
          } border-gray-300`}
        >
          Previous
        </button>

        {pages.map((page, index) => {
          if (page === "ellipsis") {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                ...
              </span>
            );
          }
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded border ${
                currentPage === page
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded border ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50"
          } border-gray-300`}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="w-[85%] h-screen bg-zinc-100  px-5 py-4 overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl capitalize font-bold tracking-tight leading-none pb-1.5 ">
            welcome, {admin.fullName}
          </h1>
          <p className="text-md flex items-center leading-none mt-1 font-semibold text-zinc-300 ">
            Dashboard <MdOutlineKeyboardArrowRight className="mt-0.5" /> Manage
            Image
          </p>
        </div>
        <Link
          to="/admin/manage_image/create"
          className="bg-blue-500 px-3 py-2 rounded text-white font-semibold capitalize"
        >
          add new image
        </Link>
      </div>

      <div className="relative mt-6 w-1/3">
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border bg-white rounded-md w-full border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-200 pr-10"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
      </div>

      <div className="p-2 bg-white mt-5 rounded border border-zinc-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-200">
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Image
              </th>
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Title
              </th>
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Description
              </th>
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Created At
              </th>
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Status
              </th>
              <th className="text-left py-3 px-4 font-bold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-zinc-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-44 h-25 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-semibold text-gray-800 capitalize">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Uploaded:{" "}
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : ""}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{item.description}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600 tracking-tight">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : ""}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/admin/manage_image/update/${item._id}`}
                        className="px-3 py-1 block bg-blue-500 text-white rounded text-sm font-medium hover:bg-blue-600"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-3 py-1 bg-red-500 hover:bg-red-300 cursor-pointer text-white rounded text-sm font-medium "
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-8  text-center text-xl font-semibold text-gray-200"
                >
                  No images found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {filteredData.length > 0 && renderPagination()}
      </div>
    </div>
  );
};

export default RightImages;
