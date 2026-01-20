{/*import React, { useState, useRef, useEffect, useCallback } from 'react'
import TopNavigation from '../../../components/TopNavigation'
import { User, Mail, Phone, Save, X, Info } from 'lucide-react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ReadByIdCustomer, UpdateCustomer } from '../../api/Customer'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const RightUpdateCustomer = () => {
  {/*const { admin } = useSelector(store => store.admin)
  const { customerId } = useParams()
  const navigate = useNavigate()
  const scrollContainerRef = useRef(null)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
  })
  

  const [loading, setLoading] = useState(false)

  /* -------------------- READ CUSTOMER -------------------- 
  {/*const readByIdCustomerApi = useCallback(async () => {
    try {
      setLoading(true)
      const res = await ReadByIdCustomer(customerId)
      const data = res?.data?.data

      setFormData({
        fullName: data?.name || '',
        email: data?.email || '',
        countryCode: data?.phone?.countryCode || '+91',
        phone: data?.phone?.number || '',
      })
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Failed to fetch customer details'
      )
    } finally {
      setLoading(false)
    }
  }, [customerId])

  /* -------------------- UPDATE CUSTOMER -------------------- 
  {/*const updateCustomerApi = async () => {
    try {
      setLoading(true)
      // The API expects a single "data" argument containing the whole object with an "id" property.
      const apiData = {
        id: customerId,
        name: formData.fullName,
        email: formData.email,
        phone: {
          countryCode: formData.countryCode,
          number: formData.phone,
        },
      }
      await UpdateCustomer(apiData)
      toast.success('Customer updated successfully')
      navigate('/admin/customers')
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || 'Failed to update customer'
      )
    } finally {
      setLoading(false)
    }
  

  /* -------------------- EFFECT -------------------- 
  useEffect(() => {
    if (admin && customerId) {
      readByIdCustomerApi()
    }
  }, [admin, customerId, readByIdCustomerApi])

  /* -------------------- HANDLERS -------------------- 
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateCustomerApi()
  }

  /* -------------------- UI -------------------- 
  return (
    <div
      ref={scrollContainerRef}
      className='flex-1 bg-gray-100 h-screen overflow-y-auto'
    >
      <TopNavigation />

      <div className='p-6'>
        {/* Breadcrumb 
        <div className='mb-4 text-sm text-gray-600 flex gap-2'>
          <Link to="/admin/customers" className='hover:text-blue-600'>
            Customer Management
          </Link>
          <span>&gt;</span>
          <span>Update Customer</span>
        </div>

        <div className='bg-white rounded-lg shadow-sm p-6'>
          {/* Header 
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-3'>
              <User className='w-6 h-6 text-gray-600' />
              <h1 className='text-2xl font-bold text-gray-800'>
                Update Customer
              </h1>
            </div>

            <span className='text-sm font-medium text-gray-600'>
              Customer ID: <span className='text-gray-800'>{customerId}</span>
            </span>
          </div>

          {/* Info 
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex gap-3'>
            <Info className='w-5 h-5 text-blue-600 mt-0.5' />
            <p className='text-sm text-blue-800'>
              Modify the details below to update the customer information.
            </p>
          </div>

          {/* Form 
          <form onSubmit={handleSubmit} className='space-y-6'>
            <Input
              icon={<User />}
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />

            <Input
              icon={<Mail />}
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            {/* Phone 
            <div>
              <label className='text-sm font-medium text-gray-700 mb-2 flex gap-2'>
                <Phone className='w-4 h-4' />
                Phone Number
              </label>
              <div className='flex gap-2'>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className='border rounded-lg px-3 py-2.5'
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                  <option value="+971">+971</option>
                  <option value="+81">+81</option>
                  <option value="+61">+61</option>
                </select>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className='flex-1 border rounded-lg px-4 py-2.5'
                  placeholder="Phone number"
                />
              </div>
            </div>

            {/* Actions 
            <div className='flex gap-4 pt-4'>
              <button
                type="submit"
                disabled={loading}
                className='bg-blue-600 text-white px-6 py-2.5 rounded-lg flex gap-2'
              >
                <Save className='w-4 h-4' />
                {loading ? 'Saving...' : 'Save Changes'}
              </button>

              <Link
                to="/admin/customers"
                className='border px-6 py-2.5 rounded-lg flex gap-2'
              >
                <X className='w-4 h-4' />
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

/* -------------------- REUSABLE INPUT -------------------- 
const Input = ({ label, icon, ...props }) => (
  <div>
    <label className='flex gap-2 text-sm font-medium text-gray-700 mb-2'>
      {icon}
      {label}
    </label>
    <input
      {...props}
      className='w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500'
    />
  </div>
)

export default RightUpdateCustomer*/}


import React, { useState, useRef, useEffect } from 'react'
import TopNavigation from '../../../components/TopNavigation'
import { User, Mail, Phone, Save, X, Info, } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ReadByIdCustomer, UpdateCustomer } from '../../api/Customer'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updatetedCustomers } from '../../../redux/reducer/CustomerSlice'

const RightUpdateCustomer = () => {
  const { admin } = useSelector(store => store.admin);
  const [ loading, setLoading ] = useState(false)
  const { customerId } = useParams()
  const navigate = useNavigate()
  const scrollContainerRef = useRef(null)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    customerId: "",
    fullName: '',
    email: '',
    countryCode: '',
    phone: '',
  })

  const readByIdCustomerApi = async () => {
    try {
      const result = await ReadByIdCustomer(customerId)
      const data = result?.data?.data
      setFormData({
        customerId: data.customerId || "",
        fullName: data?.name || '',
        email: data?.email || '',
        countryCode: data?.phone?.countryCode || '+91',
        phone: data?.phone?.number || '',
      })
    } catch (error) {
      toast.error(
        error?.response?.data?.message || 'Failed to fetch customer details'
      )
    }
  }

  useEffect(() => {
    readByIdCustomerApi()
  }, [customerId]);

  const updateCustomerApi = async () => {
    try {
      setLoading(true)

      const apiData = {
        id: customerId,
        name: formData.fullName,
        email: formData.email,
        phone: {
          countryCode: formData.countryCode,
          number: formData.phone,
        },
      }

      const result = await UpdateCustomer(apiData)
      toast.success(result.data.data)
      dispatch(updatetedCustomers(result.data.data))
      navigate('/admin/customers')
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || 'Failed to update customer'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateCustomerApi()
  }

  return (
    <div
      ref={scrollContainerRef}
      className='flex-1 bg-gray-100 h-screen overflow-y-auto'
      style={{ scrollBehavior: 'smooth' }}
    >
      <style>{`
        * {
          scroll-behavior: smooth;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <TopNavigation />

      <div className='p-6'>
        {/* Breadcrumb */}
        <div className='mb-4'>
          <div className='flex items-center gap-2 text-sm text-gray-600'>
            <Link to="/admin/customers" className='hover:text-blue-600'>Customer Management</Link>
            <span>&gt;</span>
            <span>Update Customer</span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className='bg-white rounded-lg shadow-sm p-6'>
          {/* Header Section */}
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-3'>
              <User className='w-6 h-6 text-gray-600' />
              <h1 className='text-2xl font-bold text-gray-800'>Update Customer</h1>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-sm font-medium text-gray-600'>
              Customer ID : <span className='text-zinc-300'>{formData.customerId}</span>
            </span>
            </div>
          </div>

          {/* Info Box */}
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3'>
            <Info className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
            <p className='text-sm text-blue-800'>
              Modify the details below to update the customer information. Click Save Changes to apply the updates.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className='space-y-6'>
              {/* Full Name */}
              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <User className='w-4 h-4 text-gray-500' />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className='w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder="Enter full name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <Mail className='w-4 h-4 text-gray-500' />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder="Enter email address"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className='flex items-center gap-2 text-sm font-medium text-gray-700 mb-2'>
                  <Phone className='w-4 h-4 text-gray-500' />
                  Phone Number
                </label>
                <div className='flex items-center gap-2'>
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className='border border-gray-300 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
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
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className='flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder="Enter phone number"
                  />
                  <span className='text-xs text-gray-500 whitespace-nowrap'>(Client's mobile)</span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className='flex items-center gap-4 mt-8'>
              <button
                type="submit"
                className='bg-blue-600 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md'
              >
                <Save className='w-4 h-4' />
                Save Changes
              </button>
              <Link
                to="/admin/customers"
                className='bg-white text-gray-700 px-6 py-2.5 rounded-lg border border-gray-300 flex items-center gap-2 font-medium hover:bg-gray-50 transition-colors'
              >
                <X className='w-4 h-4' />
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RightUpdateCustomer;
