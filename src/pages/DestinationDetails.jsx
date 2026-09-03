import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCurrentWeather, getWeatherForecast } from "../services/weatherService"
import WeatherCard from "../components/WeatherCard"
import ForecastCard from "../components/ForecastCard"
import DestinationMap from "../components/DestinationMap"
import { getCountryCurrency } from "../services/countryService"
import CurrencyConverter from "../components/CurrencyConverter"

function DestinationDetails() {
const location = useLocation()
const navigate = useNavigate()
const [weather, setWeather] = useState(null)
const [forecast, setForecast] = useState(null)
const [weatherLoading, setWeatherLoading] = useState(false)
const [weatherError, setWeatherError] = useState("")
const destination = location.state?.destination
const searchedDestination = location.state?.searchedDestination
const destinations = location.state?.destinations
const [currency, setCurrency] = useState(null)

useEffect(() => {
  if (!destination?.country_code) return

  const fetchCurrency = async () => {
    try {
      const data = await getCountryCurrency(destination.country_code)
      setCurrency(data)
    } catch (error) {
      setCurrency(null)
    }
  }

  fetchCurrency()
}, [destination])

useEffect(() => {
  if (!destination?.latitude || !destination?.longitude) return

  const fetchWeather = async () => {
    setWeatherLoading(true)
    setWeatherError("")

    try {
      const data = await getCurrentWeather(destination.latitude, destination.longitude)
      setWeather(data)

      const forecastData = await getWeatherForecast(destination.latitude, destination.longitude)
      setForecast(forecastData)
    } catch (error) {
      setWeatherError("Unable to load weather information.")
    } finally {
      setWeatherLoading(false)
    }
  }

  fetchWeather()
}, [destination])

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <button onClick={() => navigate("/explore", { state: { searchedDestination, destinations },})}
            className="mb-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-900 transition duration-200 hover:text-sky-600">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Explore
          </button>

            <h1 className="text-3xl font-extrabold tracking-tight text-sky-600 md:text-4xl">
                Explore Your Destination
            </h1>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">

          <section className="h-full rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            {destination?.image ? (
            <img src={destination.image.src.large} alt={destination.name}
                className="h-[390px] w-full rounded-2xl object-cover"
            />
            ) : (
            <div className="flex h-[390px] items-center justify-center rounded-2xl bg-sky-100">
                <i className="fa-regular fa-image text-4xl text-sky-300"></i>
            </div>
            )}
            <div className="mt-6">
              <h2 className="text-3xl font-bold text-slate-900">{destination?.name}</h2>
              <p className="mt-2 text-slate-500">{destination?.admin1 ? `${destination.admin1}, ` : ""}{destination?.country}</p>
            </div>
          </section>

          <div className="space-y-6">
          <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Location Information</h2>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-sky-600"></i>
                <div>
                  <p className="text-sm text-slate-500">Coordinates</p>
                  <p className="font-semibold text-slate-800">{destination?.latitude}, {destination?.longitude}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-regular fa-clock text-sky-600"></i>
                <div>
                  <p className="text-sm text-slate-500">Timezone</p>
                  <p className="font-semibold text-slate-800">{destination?.timezone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-earth-asia text-sky-600"></i>
                <div>
                  <p className="text-sm text-slate-500">Country</p>
                  <p className="font-semibold text-slate-800">{destination?.country}</p>
                </div>
              </div>
            </div>
          </section>

          {weatherLoading ? (
            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Current Weather</h2>
              <p className="mt-4 text-sm text-slate-400">Loading weather...</p>
            </div>
          ) : weatherError ? (
            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Current Weather</h2>
              <p className="mt-4 text-sm text-red-400">Unable to load weather information.</p>
            </div>
          ) : weather ? (
            <WeatherCard weather={weather} />
          ) : null}
         </div>
      </div>
            {forecast && (
            <section className="mt-8">
              <h2 className="mb-5 text-xl font-bold text-slate-900">6-Day Forecast</h2>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {forecast.time.map((date, index) => (
                  <ForecastCard
                    key={date}
                    date={date}
                    weatherCode={forecast.weather_code[index]}
                    maxTemp={forecast.temperature_2m_max[index]}
                    minTemp={forecast.temperature_2m_min[index]}
                    rainChance={forecast.precipitation_probability_max[index]}
                  />
                ))}
              </div>
            </section>
          )}
          {destination?.latitude && destination?.longitude && (
            <section className="mt-10 max-w-5xl">
              <div className="mb-5 flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Explore on Map</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    View the location of {destination.name} and explore the surrounding area.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2 text-sm text-slate-500">
                  <i className="fa-solid fa-location-dot text-sky-600"></i>
                  {destination.name}, {destination.country}
                </div>
              </div>

              <DestinationMap
                latitude={destination.latitude}
                longitude={destination.longitude}
                name={destination.name}
                country={destination.country}
              />
            </section>
          )}
          {currency && (
          <section className="mt-10 max-w-5xl">
            <CurrencyConverter currency={currency} />
          </section>
          )}

      </div>
    </main>
  )
}
export default DestinationDetails