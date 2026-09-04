import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { isFavorite, removeFavorite, saveFavorite } from "../utils/favoriteUtils"

function DestinationCard({ destination, image, searchedDestination, destinations, onFavoriteMessage }) {
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    setFavorite(isFavorite(destination.id))
  }, [destination.id])

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(destination.id)
      setFavorite(false)
      onFavoriteMessage("Removed from favorites", false)
    } else {
      saveFavorite(destination)
      setFavorite(true)
      onFavoriteMessage("Added to favorites", true)
    }
  }

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

      <div className="mt-5 flex items-center justify-between">
        <Link to={`/destination/${destination.id}`} state={{ destination, searchedDestination, destinations }}
          className="inline-flex items-center gap-2 rounded-xl border border-sky-500 px-4 py-2 text-sm font-semibold text-slate-900 transition duration-200 hover:bg-sky-600 hover:text-white">
          View Details
          <i className="fa-solid fa-arrow-right"></i>
        </Link>

        <button type="button" onClick={handleFavorite} title={favorite ? "Remove from favorites" : "Add to favorites"}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition duration-200 ${
            favorite
              ? "border-red-100 bg-red-50 text-red-500 hover:bg-red-100"
              : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
          }`}>
          <i className={`${favorite ? "fa-solid" : "fa-regular"} fa-heart`}></i>
        </button>
      </div>
    </div>
  )
}

export default DestinationCard