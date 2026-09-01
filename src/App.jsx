// import { useState, useEffect } from 'react'
// import weatherAPI from "./services/weatherAPI";
// import { formatDate, formatTime } from './utils/formatters';

import CurrentWeather from "./components/CurrentWeather"
import ForecastGrid from "./components/ForecastGrid"

// const App = () => {
//     const [current, setCurrent] = useState(null)
//     const [current_units, setCurrentUnits] = useState(null)
//     const [daily, setDaily] = useState(null)
//     const [daily_units, setDailyUnits] = useState(null)

//     useEffect(() => {
//         const fetchWeather = async () => {
//             const [curr, curr_units, dy, dy_units] = await weatherAPI()
//             setCurrent(curr)
//             setCurrentUnits(curr_units)
//             setDaily(dy)
//             setDailyUnits(dy_units)
//         }
//         fetchWeather()
//     }, [])

//     // const today = new Date();
//     // let a = formatDate(today);
//     // let b = formatTime(today);

//     return (
//         <div>
//             {current && (
//                 <div>
//                     <h2>Current Weather</h2>
//                     <p>Temperature: {current.temperature_2m}{current_units?.temperature_2m}</p>
//                     <p>Humidity: {current.relative_humidity_2m}%</p>
//                     <p>Wind Speed: {current.wind_speed_10m} {current_units?.wind_speed_10m}</p>
//                 </div>
//             )}
//             {daily && (
//                 <div>
//                     <h2>Daily Forecast</h2>
//                     <p>Max Temp: {daily.temperature_2m_max?.[0]}°C</p>
//                     <p>Min Temp: {daily.temperature_2m_min?.[0]}°C</p>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default App










const App = () => {
  return (
    <div className='text-(--text-primary) p-3.5'>
        <CurrentWeather />
        <ForecastGrid />
    </div>
  )
}

export default App
