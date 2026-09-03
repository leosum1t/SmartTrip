export async function getCountryCurrency(country) {
    const response = await fetch(
        `${BASE_URL}/name/${encodeURIComponent(country)}?fullText=true&fields=currencies`
    )

    if (!response.ok) {
        throw new Error("Failed to fetch country currency")
    }

    const data = await response.json()
    const currencies = data[0].currencies

    if (!currencies) {
        throw new Error("Currency information not found")
    }

    const currencyCode = Object.keys(currencies)[0]

    return {
        code: currencyCode,
        name: currencies[currencyCode].name,
        symbol: currencies[currencyCode].symbol,
    }
}