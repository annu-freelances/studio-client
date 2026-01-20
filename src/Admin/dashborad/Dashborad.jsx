import React from 'react'
import RightDashborad from '../dashborad/RightDashborad'
import LeftNavigation from '../../components/LeftNavigation'

const Dashborad = () => {
  return (
    <div className='flex w-full h-screen '>
      <LeftNavigation /> 
      <RightDashborad />
    </div>
  )
}

export default Dashborad
