import React from 'react'
import LeftNavigation from '../../../components/LeftNavigation'
import RightDetailBooking from './RightDetailBooking'

const DetailBooking = () => {
  return (
    <div className='flex w-full h-screen'>
    <LeftNavigation />
    <RightDetailBooking />
  </div>
  )
}

export default DetailBooking
