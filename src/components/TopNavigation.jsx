import React from 'react'
import { Bell, Search, ChevronDown, LogOut } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const TopNavigation = () => {
  const location = useLocation();

  let title = "Admin Dashboard";
  if (location.pathname.startsWith("/admin/customers")) {
    title = "Customer Management";
  }

  return (
    <div className='bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between'>
      <h1 className='text-2xl font-bold text-gray-800'>{title}</h1>
      <div className='flex items-center gap-4'>
        <span className='text-gray-700 font-medium'>Welcome, Admin</span>
        <div className='w-8 h-8 rounded-full bg-gray-300 overflow-hidden'>
          <div className='w-full h-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold'>
            A
          </div>
        </div>
        <button className='bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition'>
          <LogOut className='w-4 h-4' />
          Logout
        </button>
        <div className='flex items-center gap-3'>
          <Bell className='w-5 h-5 text-gray-600 cursor-pointer' />
          <Search className='w-5 h-5 text-gray-600 cursor-pointer' />
          <ChevronDown className='w-5 h-5 text-gray-600 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default TopNavigation
