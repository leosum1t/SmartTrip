function ForecastCard({ date, weatherCode, maxTemp, minTemp, rainChance }) {
  const getWeatherInfo = (code) => {
    if (code === 0) return { icon: "fa-sun", condition: "Clear" }
    if (code <= 2) return { icon: "fa-cloud-sun", condition: "Partly Cloudy" }
    if (code === 3) return { icon: "fa-cloud", condition: "Overcast" }
    if (code <= 48) return { icon: "fa-smog", condition: "Foggy" }
    if (code <= 67) return { icon: "fa-cloud-rain", condition: "Rain" }
    if (code <= 77) return { icon: "fa-snowflake", condition: "Snow" }
    if (code <= 82) return { icon: "fa-cloud-showers-heavy", condition: "Showers" }

    return { icon: "fa-cloud-bolt", condition: "Thunderstorm" }
  }

  const weather = getWeatherInfo(weatherCode)

  const day = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
  })

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })

  return (
    <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">

      <div>
        <h3 className="font-bold text-slate-900">{day}</h3>
        <p className="mt-1 text-sm text-slate-500">{formattedDate}</p>
      </div>

      <div className="my-6 text-center">
        <i className={`fa-solid ${weather.icon} text-4xl text-sky-600`}></i>
        <p className="mt-2 text-sm font-semibold text-slate-700">
          {weather.condition}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">High</p>
          <p className="mt-1 font-bold text-slate-900">
            <i className="fa-solid fa-arrow-up mr-1 text-sky-600"></i>
            {Math.round(maxTemp)}°
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-400">Low</p>
          <p className="mt-1 font-bold text-slate-900">
            <i className="fa-solid fa-arrow-down mr-1 text-sky-600"></i>
            {Math.round(minTemp)}°
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-sky-100 pt-3">
        <p className="text-sm text-slate-500">
          <i className="fa-solid fa-droplet mr-2 text-sky-500"></i>
          Rain <span className="font-semibold text-slate-700">{rainChance}%</span>
        </p>
      </div>

    </div>
  )
}

export default ForecastCard