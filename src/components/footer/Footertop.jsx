import React from 'react'

const Footertop = () => {
  return (
    <div className='bg-[#113361] flex py-15 '>
        <div className='flex flex-col justify-center items-center w-1/2 gap-2'>
            <h2 className='text-white text-4xl font-bold capitalize'>Ready to Explore Kashmir?</h2>
            <p className='text-xl capitalize light-color'>Get a personalized itinerary within 30 minutes</p>
        </div>
        <div className='flex justify-center items-center gap-5 w-1/2'>
            <button id='global-color-3' className='text-xl py-3 px-10 bg-white rounded-xl font-medium capitalize border-1 border-blue-800 border-solid border-white'>plan my trip</button>
            <button className='text-xl py-3 px-10 bg-white rounded-xl font-medium capitalize styling border-white'>1800 889 0856</button>
        </div>
    </div>
  )
}

export default Footertop