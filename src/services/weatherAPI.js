export async function weatherAPI(latitude, longitude) {
    if (latitude == null || longitude == null) {
        throw new Error('Latitude and longitude are required parameters.');
    }
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,pressure_msl&timezone=auto`;
    try {
        const data = await fetch(url);
        if (!data.ok) {
            const errorPayload = await response.json().catch(() => ({}));
            throw new Error(
                errorPayload.reason ||
                    `Open-Meteo API Error! Status: ${response.status}`
            );
        }
        const results = await data.json();
        return [
            results.current,
            results.current_units,
            results.daily,
            results.daily_units,
        ];
    } catch (error) {
        console.error('Failed to fetch weather data:', error.message);
        throw error;
    }
}

export const getCoordinates = async (city) => {
    if (city === '' || typeof city !== 'string' || !city || !city.trim()) {
        return {
            success: false,
            error: 'Please provide a valid city name.',
        };
    }
    try {
        const encodedCity = encodeURIComponent(city);
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodedCity}&count=1&language=en`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Geocoding request failed with status: ${response.status}`
            );
        }
        const data = await response.json();
        if (!data.results || data.results.lenght === 0) {
            return {
                success: false,
                error: `No location found for "${city}".`,
            };
        }
        const location = data.results[0];
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
    } catch (error) {
        console.error('getCoordinates Error:', error.message);
        return {
            success: false,
            error: 'Unable to connect to the geocoding service. Please try again.',
        };
    }
};
