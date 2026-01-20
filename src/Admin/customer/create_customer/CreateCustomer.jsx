import React from 'react'
import RightCreatedCustomer from './RightCreatedCustomer'
import LeftNavigation from '../../../components/LeftNavigation'

const CreateCustomer = () => {
  return (
    <div className='flex w-full h-screen'>
      <LeftNavigation />
      <RightCreatedCustomer />
    </div>
  )
}

export default CreateCustomer
