const API_URL = "https://api.pexels.com/v1/search"

export async function getDestinationImage(query) {
    const response = await fetch(`${API_URL}?query=${encodeURIComponent(query)}&per_page=1`, {
        headers: {
            Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        },
    })

    if (!response.ok) {
        throw new Error("Failed to fetch destination image")
    }

    const data = await response.json()
    return data.photos && data.photos.length > 0 ? data.photos[0] : null
}