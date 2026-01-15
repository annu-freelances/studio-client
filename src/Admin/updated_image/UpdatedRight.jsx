import React, { useState, useRef, useEffect } from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import instance from '../../utils/axios'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { updateImages } from '../../redux/reducer/ImagesSlice'

const UpdatedRight = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [dragActive, setDragActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef(null)
  const [singleImage, setSingleImages] = useState({
    title: "",
    description: "",
    image: null,
  })
  const [imageFile, setImageFile] = useState(null)

  const getFetchByIdImagesApi = async () => {
    try {
      const result = await instance.get(`/image/read/${id}`, {
        withCredentials: true
      });
      const data = result.data.data
      setSingleImages({
        title: data.title,
        description: data.description,
        image: data.imageUrl,
        createdAt: data.createdAt,
      });
      setImageFile(null)
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Failed to fetch image details. Please try again.");
      }
      console.error(error);
    }
  };

  useEffect(() => {
    getFetchByIdImagesApi()
  }, [id])

  const updatedImageApi = async () => {
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append("title", singleImage.title)
      formData.append("description", singleImage.description)
      if (imageFile) {
        formData.append("image", imageFile)
      }
      const result = await instance.put(`/image/update/${id}`, formData, {
        withCredentials: true
      })
      dispatch(updateImages(result.data.data))
      toast.success(result.data?.message || "Image updated successfully")
      navigate("/admin/manage_image")
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Failed to update image. Please try again.");
      }
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp',, 'image/gif', 'image/webp']
      if (!validTypes.includes(file.type)) {
        alert('Only JPG, PNG, WEBP or GIF file formats are allowed.')
        return
      }
      
      if (file.size > 5 * 1024 * 1024) {
        alert('Maximum file size is 5MB')
        return
      }
      setImageFile(file)
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/webp']
      if (!validTypes.includes(file.type)) {
        alert('Only JPG, PNG, WEBP or GIF file formats are allowed.')
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('Maximum file size is 5MB')
        return
      }
      setImageFile(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updatedImageApi()
  }

  const getImagePreview = () => {
    if (imageFile) {
      return URL.createObjectURL(imageFile)
    }
    return singleImage.image;
  }

  return (
    <div className="w-[85%] h-screen bg-zinc-100 px-5 py-4 overflow-y-auto">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-xl capitalize font-bold tracking-tight leading-none pb-1.5">
            Update Image
          </h1>
          <p className="text-md flex items-center leading-none mt-1 font-semibold text-zinc-300">
            Dashboard <MdOutlineKeyboardArrowRight className="mt-0.5" /> Manage
            Images <MdOutlineKeyboardArrowRight className="mt-0.5" /> Update Image
          </p>
          <Link
            to="/admin/manage_image"
            className="flex items-center gap-2 mt-3 text-gray-700 hover:text-gray-900 transition"
          >
            <IoArrowBack className="text-lg" />
            <span className="font-semibold">Back</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-2xl text-zinc-600">
            <IoMdNotificationsOutline />
          </span>
          <div className="w-12 h-12 bg-zinc-500 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white rounded shadow px-6 py-4 mt-4">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Update Image</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-0.5">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={singleImage.title}
              onChange={(e) => setSingleImages({ ...singleImage, title: e.target.value })}
              className="w-full rounded border italic  border-gray-300 bg-white py-1.5 px-2 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={singleImage.description}
              onChange={(e) => setSingleImages({ ...singleImage, description: e.target.value })}
              rows="3"
              className="w-full rounded-lg border border-gray-300 bg-white italic py-1.5 px-2 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition resize-none"
            />
          </div>
          <div className="mb-6">
            <h3 className="block text-base font-bold text-gray-900 mb-1">
              Update Image
            </h3>
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="w-48">
                  <img
                    src={getImagePreview()}
                    alt={singleImage.title}
                    className="w-full h-48 object-cover rounded border border-gray-300"
                  />
                  <p className="text-sm font-semibold text-gray-800 mt-2">
                    {singleImage.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Uploaded: {singleImage.createdAt ? (new Date(singleImage.createdAt)).toLocaleString() : ""}
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div
                  className={`border-2 border-dashed rounded p-8 text-center transition-colors ${
                    dragActive
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  style={{ cursor: 'pointer' }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <FaCloudUploadAlt className="w-16 h-16 text-gray-400 mb-4" />
                    <p className="text-base font-semibold text-gray-700 mb-2">
                      Drag & drop or click to upload
                    </p>
                    <p className="text-sm text-gray-500 mb-1">
                      Upload a new image to replace the current one. Only JPG, PNG, WEBP, GIF
                    </p>
                    <p className="text-sm text-gray-500">
                      Maximum size: 5MB
                    </p>
                    {imageFile && (
                      <p className="text-sm text-green-600 font-semibold mt-2">
                        Selected: {imageFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded cursor-pointer transition"
            >
              {loading ? (
                <div className="w-6 h-6 animate-spin border-b-2 border-t-2  rounded-full "></div>
              ) : (
                "Update Image"
              )}
            </button>
            <Link
              to="/admin/manage_image"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-2.5 rounded  transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdatedRight
