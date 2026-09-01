import React from 'react'
import ForecastCard from './ForecastCard'

const ForecastGrid = () => {
  return (
    <div className='mt-6'>
      <div className=' flex justify-between py-3.5'>
        <h3>5 day forecast</h3>
      </div>
      <div className='grid grid-cols-5 grid-rows-1 gap-3'>
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    </div>
  )
}

export default ForecastGrid
