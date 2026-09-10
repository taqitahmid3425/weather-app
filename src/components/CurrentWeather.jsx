import WeatherIcon from './WeatherIcon';
import getWeatherInfo from '../utils/weatherCodes';

const CurrentWeather = ({
    temp,
    tempUnit,
    humidity,
    humidityUnit,
    wind,
    windUnit,
    pressure,
    pressureUnit,
    weatherCode,
}) => {
    const iconInfo = getWeatherInfo(weatherCode);

    return (
        <div className="current-weather">
            <div className="weather-header flex justify-between py-3.5">
                <h3 className="text-xl">Current Weather</h3>
            </div>

            <div
                style={{
                    background: '#1E293B',
                    background:
                        'linear-gradient(315deg, rgba(30, 41, 59, 1) 0%, rgba(30, 41, 59, 1) 70%, rgba(153, 161, 175, 1) 100%)',
                }}
                className="weather-body flex flex-col items-center gap-4 border-2 border-(--border-subtle) rounded-xl p-3.5 bg-(--bg-card)"
            >
                <div className="temp-body flex items-center gap-3.5 p-3.5 rounded-xl">
                    <WeatherIcon
                        iconName={iconInfo.icon}
                        size={84}
                        className={iconInfo.textColor}
                    />
                    <div className="flex flex-col gap-3">
                        <div className="text-4xl">{`${temp} ${tempUnit}`}</div>
                        <div className="text-2xl text-(--text-secondary)">
                            {iconInfo.description}
                        </div>
                    </div>
                </div>

                <div className="temp-tail flex items-center justify-evenly gap-3.5 w-full">
                    <div className="tail-1 flex items-center gap-3.5 p-3.5 rounded-xl">
                        <WeatherIcon
                            iconName="Droplets"
                            size={72}
                            className="text-cyan-400"
                        />
                        <div className="flex flex-col gap-3">
                            <div className="text-3xl">Humidity</div>
                            <div className="text-xl">{`${humidity} ${humidityUnit}`}</div>
                        </div>
                    </div>
                    <div className="tail-2 flex items-center gap-3.5 p-3.5 rounded-xl">
                        <WeatherIcon
                            iconName="Wind"
                            size={72}
                            className="text-blue-400"
                        />
                        <div className="flex flex-col gap-3">
                            <div className="text-3xl">Wind Speed</div>
                            <div className="text-xl">{`${wind} ${windUnit}`}</div>
                        </div>
                    </div>
                    <div className="tail-3 flex items-center gap-3.5 p-3.5 rounded-xl">
                        <WeatherIcon
                            iconName="Gauge"
                            size={72}
                            className="text-purple-400"
                        />
                        <div className="flex flex-col gap-3">
                            <div className="text-3xl">Pressure</div>
                            <div className="text-xl">{`${pressure} ${pressureUnit}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
