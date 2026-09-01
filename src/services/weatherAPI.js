export default async function weatherAPI() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto';
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    
    return [result.current, result.current_units, result.daily, result.daily_units];
}