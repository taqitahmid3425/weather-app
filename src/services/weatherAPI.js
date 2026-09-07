export async function weatherAPI(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,pressure_msl&timezone=auto`;
  const data = await fetch(url);
  const result = await data.json();
  console.log(result);

  return [
    result.current,
    result.current_units,
    result.daily,
    result.daily_units,
  ];
}

export const getCoordinates = async (city) => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`
  );
  const data = await response.json();
  const location = data.results[0];
  // console.log(location);

  return {
    success: true,
    data: {
      latitude: location.latitude,
      longitude: location.longitude,
      cityName: location.name,
      country: location.country,
      timezone: location.timezone || 'auto',
    },
  };
};
