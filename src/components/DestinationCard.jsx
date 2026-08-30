function DestinationCard({ destination, image }) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {image && (
        <img src={image.src.large} alt={destination.name} className="mb-5 h-48 w-full rounded-xl object-cover" />
      )}
      
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{destination.name}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {destination.admin1 ? `${destination.admin1}, ` : ""}
            {destination.country}
          </p>
        </div>

        {destination.country_code && (
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            {destination.country_code}
          </span>
        )}
      </div>

      <div className="mt-5 space-y-2 text-sm text-slate-600">
        <p><i className="fa-solid fa-location-dot mr-2 text-sky-600"></i>{destination.latitude}, {destination.longitude}</p>
        <p><i className="fa-regular fa-clock mr-2 text-sky-600"></i>{destination.timezone}</p>
      </div>

      <button className="mt-5 font-semibold text-sky-600 transition hover:text-sky-700">
        View Details <i className="fa-solid fa-arrow-right ml-1"></i>
      </button>

    </div>
  )
}

export default DestinationCard