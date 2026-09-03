import { useEffect, useState } from "react"
import {convertCurrency, getSupportedCurrencies,
} from "../services/currencyService"

function CurrencyConverter({ currency }) {
  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [currencies, setCurrencies] = useState([])
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const data = await getSupportedCurrencies()
        setCurrencies(data)
      } catch (error) {
        setError("Unable to load currencies.")
      }
    }

    fetchCurrencies()
  }, [])

  const handleConvert = async (e) => {
    e.preventDefault()

    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid amount.")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const data = await convertCurrency(
        fromCurrency,
        currency.code,
        Number(amount)
      )

      setResult(data)
    } catch (error) {
      setError("Unable to convert this currency pair.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Currency Converter</h2>

      <p className="mt-1 text-sm text-slate-500">
        Convert your currency to {currency.name}.
      </p>

      <form onSubmit={handleConvert} className="mt-6 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Amount
          </label>

          <input
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 outline-none transition focus:border-sky-400"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              From
            </label>

            <select
              value={fromCurrency}
              onChange={(e) => {
                setFromCurrency(e.target.value)
                setResult(null)
              }}
              className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 outline-none focus:border-sky-400"
            >
              {currencies.map((item) => (
                <option key={item.iso_code} value={item.iso_code}>
                  {item.iso_code} - {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              To
            </label>

            <div className="rounded-xl border border-sky-100 bg-slate-50 px-4 py-3 font-semibold text-slate-700">
              {currency.code} - {currency.name}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || currencies.length === 0}
          className="w-full rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Converting..." : "Convert"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-sm text-red-400">{error}</p>
      )}

      {result && (
        <div className="mt-5 rounded-2xl bg-sky-50 p-4">
          <p className="text-sm text-slate-500">Converted Amount</p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            {currency.symbol} {result.convertedAmount.toFixed(2)}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            1 {fromCurrency} = {result.rate.toFixed(4)} {currency.code}
          </p>
        </div>
      )}
    </section>
  )
}

export default CurrencyConverter