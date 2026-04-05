import React, { useRef } from 'react'
import TopNavigation from '../../../components/TopNavigation'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from "react-redux"

const RightDetailBooking = () => {
  const { bookingsId } = useParams()
  const scrollContainerRef = useRef()
  const { booking } = useSelector((store) => store.Booking)
  const currentBooking = booking.find(bookings => bookings._id == bookingsId)
  return (
    <div
      ref={scrollContainerRef}
      className='flex-1 bg-gray-100 h-screen overflow-y-auto'
      style={{ scrollBehavior: 'smooth' }}
      data-testid="booking-list-container"
    >
      <style>{`
        * { scroll-behavior: smooth; }
        html { scroll-behavior: smooth; }
      `}</style>
      <TopNavigation />
      <div className="py-3 px-5">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link
              to="/admin/booking"
              className="text-zinc-400 font-semibold hover:text-blue-600 transition-colors duration-200"
            >
              Booking Management
            </Link>
            <span className="font-bold">{'>'}</span>
            <span className="text-zinc-700 cursor-pointer font-semibold">
              Update Booking
            </span>
          </div>


        </div>
        <div className=" ">
          <div className="bg-white rounded py-3 px-4 shadow">
            <h1 className='text-xl capitalize font-bold tracking-tight leading-none'>booking details</h1>
            <p className='mt-1 capitalize font-semibold text-zinc-300'>bookingId : {currentBooking.bookingId}, ({currentBooking._id})</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightDetailBooking
