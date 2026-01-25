import React from 'react'
import LeftNavigation from '../../../components/LeftNavigation'
import RightUpdateBooking from "../update_booking/RightUpdateBooking"

const UpdateBooking = () => {
  return (
    <div className='flex w-full h-screen'>
    <LeftNavigation />
    <RightUpdateBooking />
  </div>
  )
}

export default UpdateBooking;
