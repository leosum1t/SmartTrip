function DestinationCard({ destination }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img src={destination.image} alt={destination.city} className="h-48 w-full object-cover" />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{destination.city}</h3>
            <p className="mt-1 text-sm text-slate-500">{destination.country}</p>
          </div>

          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">{destination.region}</span>
        </div>

        <button className="mt-5 font-semibold text-sky-600 transition hover:text-sky-700">View Details <i className="fa-solid fa-arrow-right ml-1"></i></button>
      </div>
    </div>
  )
}

export default DestinationCard