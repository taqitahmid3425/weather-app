import ForecastCard from './ForecastCard'

const ForecastGrid = ({ maxTemp, minTemp, date, weatherCode }) => {
  return (
    <div className='mt-6'>
      <div className=' flex justify-between py-3.5'>
        <h3 className='text-xl'>5 day forecast</h3>
      </div>
      <div className='grid grid-cols-5 grid-rows-1 gap-3'>
        {date.slice(0, 5).map((d, i) => (
          <ForecastCard
            key={d}
            maxTemp={maxTemp[i]}
            minTemp={minTemp[i]}
            date={d}
            weatherCode={weatherCode[i]}
          />
        ))}
      </div>
    </div>
  )
}

export default ForecastGrid
