import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCurrentWeather, getWeatherForecast } from "../services/weatherService"
import WeatherCard from "../components/WeatherCard"

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

          <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            {destination?.image ? (
            <img src={destination.image.src.large} alt={destination.name}
                className="h-72 w-full rounded-2xl object-cover"
            />
            ) : (
            <div className="flex h-72 items-center justify-center rounded-2xl bg-sky-100">
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

          {forecast && (
            <p className="mt-4 text-sm text-slate-500">
              Forecast loaded for {forecast.time.length} days.
            </p>
          )}

        </div>
        </div>
      </div>
    </main>
  )
}

export default DestinationDetails