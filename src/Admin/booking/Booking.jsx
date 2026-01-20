import React from 'react'
import LeftNavigation from '../../components/LeftNavigation'
import RightBooking from './RightBooking'

const Booking = () => {
  return (
    <div className='flex w-full h-screen'>
      <LeftNavigation />
      <RightBooking />
    </div>
  )
}

export default Booking
