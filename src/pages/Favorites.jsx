import { useEffect, useState } from "react"
import { getFavorites, removeFavorite } from "../utils/favoriteUtils"
import FavoriteCard from "../components/FavoriteCard"

function Favorites() {
  const [favorites, setFavorites] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  const handleRemove = (id) => {
    removeFavorite(id)
    setFavorites(getFavorites())
    setMessage("Removed from favorites")
    setTimeout(() => setMessage(""), 4000)
  }

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        {message && (
          <div className="fixed right-6 top-24 z-[1100] rounded-xl border border-red-100 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-lg">
            <i className="fa-regular fa-heart mr-2 text-red-500"></i>
            {message}
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Saved <span className="text-sky-600">Destinations</span>
          </h1>

          {favorites.length > 0 && (
            <p className="mt-2 text-sm text-slate-500">
              {favorites.length} {favorites.length === 1 ? "destination" : "destinations"} saved
            </p>
          )}
        </div>

        {favorites.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((destination) => (
              <FavoriteCard
                key={destination.id}
                destination={destination}
                onRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-sky-200 bg-white/70 px-6 py-16 text-center">
            <i className="fa-regular fa-heart text-4xl text-sky-400"></i>

            <h2 className="mt-4 text-xl font-bold text-slate-800">
              No saved destinations yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Save destinations you'd like to visit and they'll appear here.
            </p>
          </div>
        )}

      </div>
    </main>
  )
}

export default Favorites