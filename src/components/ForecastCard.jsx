import React from 'react'

const ForecastCard = () => {
  return (
    <div className='border-2 border-(--bg-card) rounded-xl bg-(--bg-card) p-2'>
      <div className='text-xl'>Mon</div>
      <div>
        <img src="#" alt="#" />
      </div>
      <div className='flex justify-between text-lg'>
        <span>28 C</span>
        <span>18 C</span>
      </div>
      <div className='text-lg'>Mostly Sunny</div>
    </div>
  )
}

export default ForecastCard
