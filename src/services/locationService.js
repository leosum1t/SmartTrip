const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search"

export async function searchLocations(query) {
    const response = await fetch(`${BASE_URL}?name=${encodeURIComponent(query)}&count=10&language=en&format=json`)

    if (!response.ok) {
        throw new Error("Failed to fetch destinations")
    }

    const data = await response.json()
    return data.results || []
}