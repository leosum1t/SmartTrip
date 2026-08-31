function WeatherCard({ weather }) {
  return (
    <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold text-slate-900">Current Weather</h2>

      <div className="grid grid-cols-2 gap-3">

        <div className="rounded-xl bg-sky-50 p-3">
          <div className="flex items-center gap-2 text-sky-600">
            <i className="fa-solid fa-temperature-half"></i>
            <p className="text-sm font-semibold">Temperature</p>
          </div>
          <p className="mt-2 text-xl font-bold text-slate-900">{weather.temperature_2m}°C</p>
        </div>

        <div className="rounded-xl bg-sky-50 p-3">
          <div className="flex items-center gap-2 text-sky-600">
            <i className="fa-solid fa-temperature-arrow-up"></i>
            <p className="text-sm font-semibold">Feels Like</p>
          </div>
          <p className="mt-2 text-xl font-bold text-slate-900">{weather.apparent_temperature}°C</p>
        </div>

        <div className="rounded-xl bg-sky-50 p-3">
          <div className="flex items-center gap-2 text-sky-600">
            <i className="fa-solid fa-droplet"></i>
            <p className="text-sm font-semibold">Humidity</p>
          </div>
          <p className="mt-2 text-xl font-bold text-slate-900">{weather.relative_humidity_2m}%</p>
        </div>

        <div className="rounded-xl bg-sky-50 p-3">
          <div className="flex items-center gap-2 text-sky-600">
            <i className="fa-solid fa-wind"></i>
            <p className="text-sm font-semibold">Wind Speed</p>
          </div>
          <p className="mt-2 text-xl font-bold text-slate-900">
            {weather.wind_speed_10m}
            <span className="ml-1 text-xs font-semibold text-slate-500">km/h</span>
          </p>
        </div>

      </div>
    </section>
  )
}

export default WeatherCard