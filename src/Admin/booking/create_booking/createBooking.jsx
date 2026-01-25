import React from 'react'
import LeftNavigation from '../../../components/LeftNavigation'
import RightCreateBooking from './RightCreateBooking'

const CreateBooking = () => {
  return (
    <div className='flex w-full h-screen'>
    <LeftNavigation />
    <RightCreateBooking />
  </div>
  )
}

export default CreateBooking
