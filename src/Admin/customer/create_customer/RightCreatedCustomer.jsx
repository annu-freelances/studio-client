import React, { useState } from 'react'
import TopNavigation from '../../../components/TopNavigation'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Info, Lock, Mail, Phone, Save, User, AlertCircle, X } from 'lucide-react'

import { useDispatch } from 'react-redux'
import { addCustomers } from '../../../redux/reducer/CustomerSlice'
import { toast } from 'react-toastify'
import { CreateCustomer } from '../../api/Customer'

const RightCreatedCustomer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState(null)
  const [apiError, setApiError] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    countryCode: '+91',
  })

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const togglePasswordVisibility = () => {
    if (formData.password.trim()) {
      setShowPassword(prev => !prev)
    }
  }

  const createdCustomerApi = async () => {
    try {
      setIsSubmitting(true)
      setErrors(null)
      setApiError(null)

      const payload = {
        ...formData,
        phone: `${formData.countryCode}${formData.phone}`
      }
      
      const result = await CreateCustomer(payload)
      dispatch(addCustomers(result.data.data))
      toast.success("Customer created successfully!")
      navigate("/admin/customers")
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        countryCode: '+91'
      })
    } catch (error) {
      const message = error?.response?.data?.message || error.message || "Something went wrong"
      setErrors({ api: message })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return;
    createdCustomerApi()
  }

  const clearError = (field) => {
    if (!errors || !errors[field]) return;
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return Object.keys(updated).length > 0 ? updated : null;
    });
  };
  return (
    <div className='flex-1 bg-gray-100 h-screen overflow-y-auto'>
      <TopNavigation />
      <div className='py-3 px-5'>
        <div className='mb-4'>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <Link
              to="/admin/customers"
              className="text-zinc-400 hover:text-blue-600 transition-colors duration-200"
            >
              Customer Management
            </Link>
            <span>&gt;</span>
            <span className='text-zinc-400'>Add New Customer</span>
          </div>
        </div>
        <div className='bg-white rounded shadow p-4'>
          <div className='flex items-center justify-between mb-5'>
            <div className='flex items-center gap-3'>
              <User className='w-6 h-6 text-gray-600' />
              <h1 className='text-2xl font-bold text-gray-800'>Add New Customer</h1>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-sm text-gray-600'>Customer ID:</span>
              <div className='border capitalize border-gray-300 rounded px-3 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 select-none'>
                auto generated ID
              </div>
            </div>
          </div>
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5 flex items-start gap-3'>
            <Info className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
            <p className='text-sm text-blue-800'>
              Fill in the details below to create a new customer. A unique ID will be generated automatically.
            </p>
          </div>
          {apiError && (
            <div className='bg-red-50 border border-red-200 rounded-lg p-4 mb-5 flex items-start gap-3 relative'>
              <AlertCircle className='w-5 h-5 text-red-600 shrink-0 mt-0.5' />
              <p className='text-sm text-red-800 flex-1'>
                {apiError}
              </p>
              <button
                onClick={() => setApiError(null)}
                className='text-red-600 hover:text-red-800 transition-colors'
                aria-label="Close error"
              >
                <X className='w-4 h-4' />
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='space-y-5'>
              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-1'>
                  <User className='w-4 h-4 text-gray-500' />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    clearError('name');
                  }}
                  className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors && errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter full name"
                  required
                />
                {errors && errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-1'>
                  <Mail className='w-4 h-4 text-gray-500' />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    clearError('email');
                  }}
                  className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors && errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter email address"
                  required
                />
                {errors && errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-1'>
                  <Phone className='w-4 h-4 text-gray-500' />
                  Phone Number
                </label>
                <div className='flex items-center gap-2'>
                  <select
                    name="countryCode"
                    value={formData.countryCode || "+91"}
                    onChange={(e) => {
                      setFormData({ ...formData, countryCode: e.target.value });
                    }}
                    className='border border-gray-300 outline-none rounded-lg px-3 py-2.5 text-gray-800 bg-white w-24 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                    <option value="+971">+971</option>
                    <option value="+81">+81</option>
                    <option value="+61">+61</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      clearError('phone');
                    }}
                    className={`flex-1 border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors && errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                {errors && errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <Lock className='w-4 h-4 text-gray-500' />
                  Password
                </label>
                <div className='relative'>
                  <Lock className='w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none' />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                      clearError('password');
                    }}
                    autoComplete="new-password"
                    className={`w-full border rounded-lg pl-10 pr-12 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors && errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter password"
                    required
                  />
                  {formData.password.trim() && (
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1 transition-colors'
                    >
                      {showPassword ? (
                        <EyeOff className='w-4 h-4' aria-hidden="true" />
                      ) : (
                        <Eye className='w-4 h-4' aria-hidden="true" />
                      )}
                    </button>
                  )}
                </div>
                {errors && errors.password && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span>
                    {errors.password}
                  </p>
                )}
              </div>
            </div>
            
            <div className='flex items-center gap-4 mt-6'>
              <button
                type="submit"
                disabled={isSubmitting}
                className='bg-blue-600 text-white px-6 py-2.5 rounded-md flex items-center gap-2 font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <Save className='w-4 h-4' />
                {isSubmitting ? (
                  <div className="w-6 h-6 animate-spin border-b-2 border-t-2  rounded-full "></div>
                ) : (
                  "Create Customer"
                )}
              </button>
              <Link
                to="/admin/customers"
                className='bg-white text-gray-700 px-6 py-2.5 rounded-md border border-gray-300 flex items-center gap-2 font-medium hover:bg-gray-50 transition-colors'
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RightCreatedCustomer
//🟢 Active (green badge)
//🔴 Inactive (red badge)
//13:00 - 18:00