import React from 'react'
import RightDashborad from '../dashborad/RightDashborad'
import LeftDashborad from '../../components/LeftDashborad'

const Dashborad = () => {
  return (
    <div className='flex w-full h-screen '>
      <LeftDashborad /> 
      <RightDashborad />
    </div>
  )
}

export default Dashborad
