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