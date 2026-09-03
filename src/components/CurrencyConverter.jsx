import { useEffect, useState } from "react"
import { convertCurrency, getSupportedCurrencies } from "../services/currencyService"

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
      const data = await convertCurrency(fromCurrency, currency.code, Number(amount))
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

      <form onSubmit={handleConvert} className="mt-6">
        <div className="grid gap-x-6 gap-y-5 md:grid-cols-[1.2fr_180px_1fr]">

          <div className="order-1">
            <label className="mb-2 block text-sm font-semibold text-slate-700">From</label>
            <select value={fromCurrency} onChange={(e) => { setFromCurrency(e.target.value); setResult(null) }}
              className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition duration-200 hover:border-sky-300 focus:border-sky-400">
              {currencies.map((item) => (
                <option key={item.iso_code} value={item.iso_code}>{item.iso_code} - {item.name}</option>
              ))}
            </select>
          </div>

          <div className="order-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Amount</label>
            <input type="number" min="0" step="any" value={amount} placeholder="Enter amount"
              onChange={(e) => { setAmount(e.target.value); setResult(null) }}
              className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition duration-200 hover:border-sky-300 focus:border-sky-400" />
          </div>

          <div className="order-5 md:order-3">
            <p className="mb-2 text-sm font-semibold text-slate-700">Converted Amount</p>
            {result && <p className="flex h-[50px] items-center text-xl font-bold text-slate-900">{currency.symbol} {result.convertedAmount.toFixed(2)}</p>}
          </div>

          <div className="order-3 md:order-4">
            <label className="mb-2 block text-sm font-semibold text-slate-700">To</label>
            <div className="flex h-[50px] cursor-default items-center rounded-xl border border-sky-100 bg-slate-50 px-4 font-semibold text-slate-700 transition duration-200 hover:border-sky-300">
              {currency.code} - {currency.name}
            </div>
          </div>

          <div className="order-4 md:order-5">
            <p className="mb-2 text-sm font-semibold text-slate-700">Convert</p>
            <button type="submit" disabled={loading || currencies.length === 0}
              className="h-[50px] w-full cursor-pointer rounded-xl border-2 border-sky-600 bg-transparent px-4 font-semibold text-slate-900 transition duration-200 hover:bg-sky-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50">
              {loading ? "Converting..." : "Convert Currency"}
            </button>
          </div>

          <div className="order-6">
            <p className="mb-2 text-sm font-semibold text-slate-700">Exchange Rate</p>
            {result && <p className="flex h-[50px] items-center font-semibold text-slate-800">1 {fromCurrency} = {result.rate.toFixed(4)} {currency.code}</p>}
          </div>

        </div>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
      </form>
    </section>
  )
}

export default CurrencyConverter