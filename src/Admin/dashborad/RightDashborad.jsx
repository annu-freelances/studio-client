import React, { useState } from 'react'
import { Calendar, Users, IndianRupee, Upload, ArrowUp, ArrowRight } from 'lucide-react'
import TopNavigation from '../../components/TopNavigation'

const RightDashborad = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 Days')

  // Local data matching the image
  const metrics = [
    { icon: Calendar, label: 'Total Bookings', value: '120', trend: '+15% This month', trendColor: 'text-green-500' },
    { icon: Calendar, label: 'Pending Approvals', value: '8' },
    { icon: Users, label: 'Total Clients', value: '45', trend: '+3 +3 New', trendColor: 'text-green-500' },
    { icon: IndianRupee, label: 'Total Revenue', value: '3,25,000', trend: '+75,000 This month', trendColor: 'text-green-500' },
  ]

  const recentBookings = [
    { name: 'Mehta Wedding', date: 'April 18, 2026', status: 'Pending', statusColor: 'text-orange-500' },
    { name: 'Arora Birthday', date: 'April 22, 2026', status: 'Confirmed', statusColor: 'text-green-500' },
    { name: 'Rajesh Event', date: 'April 25, 2026', status: 'Approved', statusColor: 'text-green-500' },
  ]

  const latestPayments = [
    { name: 'Rahul Sharma', amount: '₹15,000', status: 'Paid', statusColor: 'text-green-500' },
    { name: 'Sneha Verma', amount: '₹10,000', status: 'Paid', statusColor: 'text-green-500' },
    { name: 'Amit Joshi', amount: '₹5,000', status: 'Pending', statusColor: 'text-orange-500' },
  ]

  const quickActions = [
    { icon: Calendar, label: 'New Booking' },
    { icon: Users, label: 'Add New Client' },
    { icon: Upload, label: 'Upload Photos' },
    { icon: Calendar, label: 'Manage Calendar' },
  ]

  // Chart data for bookings overview
  const chartData = [
    { month: 'Oct', bookings: 40, trend: 35 },
    { month: 'Nov', bookings: 60, trend: 50 },
    { month: 'Dec', bookings: 30, trend: 45 },
    { month: 'Jan', bookings: 50, trend: 55 },
    { month: 'Feb', bookings: 70, trend: 65 },
    { month: 'Mar', bookings: 80, trend: 75 },
    { month: 'Apr', bookings: 60, trend: 70 },
  ]

  const maxBooking = Math.max(...chartData.map(d => d.bookings))

  // Calendar data
  const calendarDates = [
    { day: 17, status: 'available' },
    { day: 22, status: 'pending' },
    { day: 23, status: 'booked' },
    { day: 25, status: 'booked' },
  ]

  return (
    <div className='flex-1 bg-gray-100 h-screen overflow-y-auto'>
      {/* Header */}
     <TopNavigation />

      {/* Main Content */}
      <div className='p-6 space-y-6'>
        {/* Metrics Cards */}
        <div className='grid grid-cols-4 gap-4'>
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className='bg-white rounded-lg p-5 shadow-sm'>
                <div className='flex items-center justify-between mb-3'>
                  <Icon className='w-8 h-8 text-blue-600' />
                </div>
                <h3 className='text-gray-500 text-sm font-medium mb-1'>{metric.label}</h3>
                <div className='flex items-end justify-between'>
                  <p className='text-2xl font-bold text-gray-800'>{metric.value}</p>
                  {metric.trend && (
                    <div className='flex items-center gap-1'>
                      <ArrowUp className={`w-4 h-4 ${metric.trendColor}`} />
                      <span className={`text-xs ${metric.trendColor} font-medium`}>{metric.trend}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bookings Overview and Recent Bookings */}
        <div className='grid grid-cols-3 gap-4'>
          {/* Bookings Overview */}
          <div className='col-span-2 bg-white rounded-lg p-5 shadow-sm'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-lg font-semibold text-gray-800'>Bookings Overview</h2>
              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                  <span className='text-xs text-gray-600'>Available</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <span className='text-xs text-gray-600'>Booked</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-orange-500'></div>
                  <span className='text-xs text-gray-600'>Pending</span>
                </div>
              </div>
            </div>
            
            {/* Time Filters */}
            <div className='flex items-center gap-2 mb-4'>
              {['Last 7 Days', 'Last 30 Days', 'This Year'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 rounded text-xs font-medium transition ${
                    selectedPeriod === period
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>

            {/* Chart */}
            <div className='flex items-end justify-between h-48 mb-4'>
              {chartData.map((data, index) => (
                <div key={index} className='flex-1 flex flex-col items-center gap-2'>
                  <div className='relative w-full flex items-end justify-center h-40'>
                    {/* Bar Chart */}
                    <div
                      className='w-8 bg-blue-500 rounded-t'
                      style={{ height: `${(data.bookings / maxBooking) * 100}%` }}
                    ></div>
                    {/* Line Chart overlay */}
                    <div
                      className='absolute bottom-0 w-2 bg-green-500 rounded-t'
                      style={{ height: `${(data.trend / maxBooking) * 100}%` }}
                    ></div>
                  </div>
                  <span className='text-xs text-gray-600'>{data.month}</span>
                </div>
              ))}
            </div>

            {/* Chart Summary */}
            <div className='flex items-center justify-between mt-4 p-3 bg-green-50 rounded'>
              <div>
                <p className='text-xs text-gray-600'>Bookings 56/02</p>
                <p className='text-lg font-bold text-gray-800'>566</p>
              </div>
              <div className='text-right'>
                <p className='text-sm font-semibold text-green-600'>₹125,000 this month</p>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className='bg-white rounded-lg p-5 shadow-sm'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-lg font-semibold text-gray-800'>Recent Bookings</h2>
              <button className='text-blue-600 text-xs font-medium hover:underline'>
                View All &gt;
              </button>
            </div>
            <div className='space-y-4'>
              {recentBookings.map((booking, index) => (
                <div key={index} className='flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0'>
                  <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shrink-0'>
                    <Users className='w-5 h-5 text-gray-600' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-semibold text-gray-800 truncate'>{booking.name}</p>
                    <p className='text-xs text-gray-500'>{booking.date}</p>
                  </div>
                  <span className={`text-xs font-medium ${booking.statusColor}`}>{booking.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Calendar and Latest Payments */}
        <div className='grid grid-cols-3 gap-4'>
          {/* Booking Calendar */}
          <div className='col-span-2 bg-white rounded-lg p-5 shadow-sm'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-lg font-semibold text-gray-800'>Booking Calendar</h2>
              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-green-500'></div>
                  <span className='text-xs text-gray-600'>Available</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-red-500'></div>
                  <span className='text-xs text-gray-600'>Booked</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-orange-500'></div>
                  <span className='text-xs text-gray-600'>Pending</span>
                </div>
              </div>
            </div>
            
            <div className='flex gap-4'>
              {/* Calendar Grid */}
              <div className='flex-1'>
                <div className='grid grid-cols-7 gap-2 mb-2'>
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className='text-center text-xs font-medium text-gray-600 py-2'>
                      {day}
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-7 gap-2'>
                  {Array.from({ length: 35 }, (_, i) => i + 1).map((day) => {
                    const dateInfo = calendarDates.find(d => d.day === day)
                    let bgColor = 'bg-gray-50'
                    if (dateInfo) {
                      if (dateInfo.status === 'available') bgColor = 'bg-green-500 text-white'
                      if (dateInfo.status === 'booked') bgColor = 'bg-red-500 text-white'
                      if (dateInfo.status === 'pending') bgColor = 'bg-orange-500 text-white'
                    }
                    return (
                      <div
                        key={day}
                        className={`text-center text-sm py-2 rounded ${bgColor} ${
                          !dateInfo ? 'text-gray-400' : 'font-semibold'
                        }`}
                      >
                        {day}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Calendar Summary */}
              <div className='w-48 bg-green-50 rounded-lg p-4 flex flex-col justify-center'>
                <div className='flex items-center gap-2 mb-3'>
                  <div className='w-5 h-5 rounded-full bg-green-500 flex items-center justify-center'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                  <span className='text-sm font-semibold text-gray-800'>13 April 2026</span>
                </div>
                <p className='text-lg font-bold text-gray-800 mb-1'>50 Bookings</p>
                <p className='text-sm text-gray-600'>54 Pending</p>
              </div>
            </div>
          </div>

          {/* Latest Payments */}
          <div className='bg-white rounded-lg p-5 shadow-sm'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-lg font-semibold text-gray-800'>Latest Payments</h2>
              <button className='text-blue-600 text-xs font-medium hover:underline'>
                View All &gt;
              </button>
            </div>
            <div className='space-y-4'>
              {latestPayments.map((payment, index) => (
                <div key={index} className='flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0'>
                  <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shrink-0'>
                    <Users className='w-5 h-5 text-gray-600' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-semibold text-gray-800 truncate'>{payment.name}</p>
                    <p className='text-xs text-gray-500'>{payment.amount}</p>
                  </div>
                  <span className={`text-xs font-medium ${payment.statusColor}`}>{payment.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Login Status and Quick Actions */}
        <div className='grid grid-cols-2 gap-4'>
          {/* Client Login Status */}
          <div className='bg-white rounded-lg p-5 shadow-sm'>
            <h2 className='text-lg font-semibold text-gray-800 mb-4'>Client Login Status</h2>
            <div className='flex items-center gap-6'>
              {/* Donut Chart */}
              <div className='relative w-32 h-32'>
                <svg className='transform -rotate-90' viewBox='0 0 100 100'>
                  <circle
                    cx='50'
                    cy='50'
                    r='40'
                    fill='none'
                    stroke='#e5e7eb'
                    strokeWidth='12'
                  />
                  <circle
                    cx='50'
                    cy='50'
                    r='40'
                    fill='none'
                    stroke='#3b82f6'
                    strokeWidth='12'
                    strokeDasharray={`${75 * 2 * Math.PI * 40 / 100} ${2 * Math.PI * 40}`}
                    strokeLinecap='round'
                  />
                </svg>
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                  <p className='text-2xl font-bold text-blue-600'>45</p>
                  <p className='text-xs text-gray-600'>Active</p>
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center'>
                  <p className='text-lg font-bold text-gray-800'>12</p>
                </div>
              </div>

              {/* Status List */}
              <div className='flex-1 space-y-3'>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-blue-500'></div>
                  <span className='text-sm text-gray-700'>12 | Active Logins</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-blue-400'></div>
                  <span className='text-sm text-gray-700'>4 | Awaiting Selection</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-blue-300'></div>
                  <span className='text-sm text-gray-700'>4 | Poncje Clients</span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-blue-200'></div>
                  <span className='text-sm text-gray-700'>4 | Pecnding Sellers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className='bg-white rounded-lg p-5 shadow-sm'>
            <h2 className='text-lg font-semibold text-gray-800 mb-4'>Quick Actions</h2>
            <div className='grid grid-cols-2 gap-3'>
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <button
                    key={index}
                    className='bg-blue-600 text-white p-4 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-blue-700 transition'
                  >
                    <Icon className='w-5 h-5' />
                    <span className='text-xs font-medium text-center'>{action.label}</span>
                    <ArrowRight className='w-4 h-4' />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightDashborad