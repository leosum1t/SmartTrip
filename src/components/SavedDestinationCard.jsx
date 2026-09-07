function SavedDestinationCard({ destination }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

      {destination.image ? (
        <img
          src={destination.image.src.large}
          alt={destination.name}
          className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-40 items-center justify-center bg-sky-100">
          <i className="fa-regular fa-image text-3xl text-sky-300"></i>
        </div>
      )}

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-900">
              {destination.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {destination.admin1 ? `${destination.admin1}, ` : ""}
              {destination.country}
            </p>
          </div>

          <i className="fa-solid fa-heart text-red-500"></i>
        </div>
      </div>

    </div>
  )
}

export default SavedDestinationCard