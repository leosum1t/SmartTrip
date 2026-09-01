const BASE_URL = "https://api.open-meteo.com/v1/forecast"

export async function getCurrentWeather(latitude, longitude) {
    const response = await fetch(
        `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m`
    )

    if (!response.ok) {
        throw new Error("Failed to fetch weather")
    }

    const data = await response.json()
    return data.current
}

export async function getWeatherForecast(latitude, longitude) {
    const response = await fetch(
        `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=5&timezone=auto`
    )

    if (!response.ok) {
        throw new Error("Failed to fetch weather forecast")
    }

    const data = await response.json()
    return data.daily
}