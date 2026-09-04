import { Link } from "react-router-dom"

function FavoriteCard({ destination, onRemove }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      {destination.image && (
        <img
          src={destination.image.src.large}
          alt={destination.name}
          className="h-56 w-full object-cover"
        />
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{destination.name}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {destination.admin1 ? `${destination.admin1}, ` : ""}
              {destination.country}
            </p>
          </div>

          <button
            onClick={() => onRemove(destination.id)}
            title="Remove from favorites"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-red-100 bg-red-50 text-red-500 transition duration-200 hover:scale-105 hover:border-red-300 hover:bg-red-100"
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>

        <Link
          to={`/destination/${destination.id}`}
          state={{ destination }}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-sky-500 px-4 py-2 text-sm font-semibold text-slate-900 transition duration-200 hover:bg-sky-600 hover:text-white"
        >
          View Details
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}

export default FavoriteCard