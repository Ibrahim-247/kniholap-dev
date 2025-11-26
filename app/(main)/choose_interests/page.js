import InterestList from '@/components/choose_interests/InterestList'
import React from 'react'

const YourInterest = () => {
  // main render
  return (
    <div className='container flex flex-col gap-4 md:gap-10 justify-start items-center'>
      {/* header */}
      <div className='flex flex-col  justify-start items-center'>
        <h1 className='md:text-4xl text-xl sm:text-2xl font-bold text-center'>Choose Your Interests</h1>
        <p className='md:text-xl text-sm sm:text-lg text-center'>Select the genres you love to get personalized recommendations.</p>
      </div>
      {/* interests */}
      <InterestList />
    </div>
  )
}

export default YourInterest