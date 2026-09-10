import { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import ForecastGrid from './components/ForecastGrid';
import { weatherAPI, getCoordinates } from './services/weatherAPI';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
    const [current, setCurrent] = useState(null);
    const [current_units, setCurrentUnits] = useState(null);
    const [daily, setDaily] = useState(null);
    const [daily_units, setDailyUnits] = useState(null);
    const [latitude, setLatitude] = useState('22.81763');
    const [longitude, setLongitude] = useState('91.08945');

    const fetchLocationInfo = async (city) => {
        const locationData = await getCoordinates(city);
        if (locationData.success) {
            setLatitude(locationData.data.latitude);
            setLongitude(locationData.data.longitude);
            return [locationData.data.cityName, locationData.data.country];
        } else {
            alert(locationData.error);
        }
    };

    useEffect(() => {
        const fetchWeather = async () => {
            const [curr, curr_units, dy, dy_units] = await weatherAPI(
                latitude,
                longitude
            );
            setCurrent(curr);
            setCurrentUnits(curr_units);
            setDaily(dy);
            setDailyUnits(dy_units);
        };
        fetchWeather();
    }, [latitude, longitude]);

    return (
        <div className="w-full flex justify-center">
            <div className="text-(--text-primary) p-3.5 w-min-[768px] w-max-[1024px]">
                <SearchBar onSearchSubmit={fetchLocationInfo} />
                {current ? (
                    <>
                        <CurrentWeather
                            temp={current.temperature_2m}
                            tempUnit={current_units.temperature_2m}
                            humidity={current.relative_humidity_2m}
                            humidityUnit={current_units.relative_humidity_2m}
                            wind={current.wind_speed_10m}
                            windUnit={current_units.wind_speed_10m}
                            pressure={current.pressure_msl}
                            pressureUnit={current_units.pressure_msl}
                            weatherCode={current.weather_code}
                        />

                        <ForecastGrid
                            maxTemp={daily.temperature_2m_max}
                            maxTempUnit={daily_units.temperature_2m_max}
                            minTemp={daily.temperature_2m_min}
                            minTempUnit={daily_units.temperature_2m_min}
                            date={daily.time}
                            weatherCode={daily.weather_code}
                        />
                    </>
                ) : (
                    <LoadingSpinner />
                )}
            </div>
        </div>
    );
};

export default App;
