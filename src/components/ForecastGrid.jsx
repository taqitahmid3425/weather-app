import ForecastCard from './ForecastCard'

// maxTemp={daily.temperature_2m_max}
// minTemp={daily.temperature_2m_min}
// date={daily.time}
// weatherCode={daily.weather_code}

const ForecastGrid = ({ maxTemp, minTemp, date, weatherCode }) => {
  return (
    <div className='mt-6'>
      <div className=' flex justify-between py-3.5'>
        <h3 className='text-xl'>5 day forecast</h3>
      </div>
      <div className='grid grid-cols-5 grid-rows-1 gap-3'>
        <ForecastCard maxTemp={maxTemp[0]} minTemp={minTemp[0]} date={date[0]} weatherCode={weatherCode[0]} />
        <ForecastCard maxTemp={maxTemp[1]} minTemp={minTemp[1]} date={date[1]} weatherCode={weatherCode[1]} />
        <ForecastCard maxTemp={maxTemp[2]} minTemp={minTemp[2]} date={date[2]} weatherCode={weatherCode[2]} />
        <ForecastCard maxTemp={maxTemp[3]} minTemp={minTemp[3]} date={date[3]} weatherCode={weatherCode[3]} />
        <ForecastCard maxTemp={maxTemp[4]} minTemp={minTemp[4]} date={date[4]} weatherCode={weatherCode[4]} />
      </div>
    </div>
  )
}

export default ForecastGrid
