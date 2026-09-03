const BASE_URL = "https://api.frankfurter.dev/v2"

export async function convertCurrency(fromCurrency, toCurrency, amount) {
    const response = await fetch(
        `${BASE_URL}/rate/${fromCurrency}/${toCurrency}`
    )

    if (!response.ok) {
        throw new Error("Failed to fetch exchange rate")
    }

    const data = await response.json()

    return {
        rate: data.rate,
        convertedAmount: amount * data.rate,
    }
}