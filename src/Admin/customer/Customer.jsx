import React from 'react'
import LeftNavigation from '../../components/LeftNavigation'
import RightCustomer from './RightCustomer'

const Customer = () => {
  return (
    <div className='flex w-full h-screen'>
      <LeftNavigation />
      <RightCustomer />
    </div>
  )
}

export default Customer 