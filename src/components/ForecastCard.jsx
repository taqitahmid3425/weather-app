import { formatDay, formatTempC } from "../utils/formatters"
import getWeatherInfo from "../utils/weatherCodes"
import WeatherIcon from "./WeatherIcon";

const ForecastCard = ({ maxTemp, minTemp, date, weatherCode }) => {
  const iconInfo = getWeatherInfo(weatherCode);

  return (
    <div className='border-2 border-(--border-muted) rounded-xl bg-(--bg-card) p-2'>
      <div className='text-xl'>{formatDay(date)}</div>
      <div className="py-2">
        <WeatherIcon iconName={iconInfo.icon} size={36} className={iconInfo.textColor} />
      </div>
      <div className='flex justify-between text-md'>
        <span>{formatTempC(maxTemp)}</span>
        <span>{formatTempC(minTemp)}</span>
      </div>
      <div className='py-1 text-md text-(--text-secondary)'>
        {iconInfo.description}
      </div>
    </div>
  )
}

export default ForecastCard
