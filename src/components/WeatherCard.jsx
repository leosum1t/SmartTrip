function WeatherCard({ weather }) {
  return (
    <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Current Weather</h2>

      <div className="mt-5 flex items-center gap-4">
        <i className="fa-solid fa-cloud-sun text-4xl text-sky-600"></i>

        <div>
          <p className="text-4xl font-extrabold text-slate-900">{weather.temperature_2m}°C</p>
          <p className="mt-1 text-sm text-slate-500">Current temperature</p>
        </div>
      </div>
    </section>
  )
}

export default WeatherCard