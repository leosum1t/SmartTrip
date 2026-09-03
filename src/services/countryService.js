const BASE_URL = "https://countries.dev"

export async function getCountryCurrency(countryCode) {
    const response = await fetch(`${BASE_URL}/alpha/${countryCode}`)

    if (!response.ok) {
        throw new Error("Failed to fetch country currency")
    }

    const data = await response.json()
    const currency = data.currencies && data.currencies.length > 0 ? data.currencies[0] : null

    if (!currency) {
        throw new Error("Currency information not found")
    }

    return currency
}