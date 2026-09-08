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
    <div className="group overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative">
        {image ? (
          <img src={image.src.large} alt={destination.name} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-52 items-center justify-center bg-sky-50">
            <i className="fa-regular fa-image text-4xl text-sky-200"></i>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>

        {destination.country_code && (
          <span className="absolute right-4 top-4 rounded-lg border border-white/40 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
            {destination.country_code}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900">{destination.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{destination.admin1 ? `${destination.admin1}, ` : ""}{destination.country}</p>

        <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-sky-600"></i>
            <span className="truncate">{destination.latitude}, {destination.longitude}</span>
          </div>

          <div className="flex items-center gap-2 sm:justify-end">
            <i className="fa-regular fa-clock text-sky-600"></i>
            <span className="truncate">{destination.timezone}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-sky-50 pt-4">
          <Link to={`/destination/${destination.id}`} state={{ destination, searchedDestination, destinations }}
            className="flex items-center gap-2 rounded-xl border border-sky-200 px-4 py-2 text-sm font-semibold text-slate-900 transition duration-200 hover:border-sky-600 hover:text-sky-600">
            View Details
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

          <button type="button" onClick={handleFavorite} title={favorite ? "Remove from favorites" : "Add to favorites"}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition duration-200 ${
              favorite
                ? "border-red-200 bg-red-50 text-red-500 hover:bg-red-100"
                : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
            }`}>
            <i className={`${favorite ? "fa-solid" : "fa-regular"} fa-heart`}></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard