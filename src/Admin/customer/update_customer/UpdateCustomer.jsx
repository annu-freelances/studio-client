import React from 'react'
import LeftNavigation from '../../../components/LeftNavigation'
import RightUpdateCustomer from './RightUpdateCustomer'

const UpdateCustomer = () => {
  return (
    <div className='flex w-full h-screen'>
      <LeftNavigation />
      <RightUpdateCustomer />
    </div>
  )
}

export default UpdateCustomer
