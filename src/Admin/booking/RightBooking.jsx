import React, { useRef } from 'react'
import TopNavigation from '../../components/TopNavigation'

const RightBooking = () => {
    const scrollContainerRef = useRef(null)
    return (
        <div
            ref={scrollContainerRef}
            className='flex-1 bg-gray-100 h-screen overflow-y-auto'
            style={{ scrollBehavior: 'smooth' }}
        >
            <style>{`
        * {
          scroll-behavior: smooth;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
            <TopNavigation />


            <div></div>

        </div>
    )
}

export default RightBooking
