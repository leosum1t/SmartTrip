import { useEffect, useState } from "react"
import { getFavorites } from "../utils/favoriteUtils"
import { getTrips } from "../utils/tripUtils"

function Dashboard() {
  const [favorites, setFavorites] = useState([])
  const [trips, setTrips] = useState([])

  useEffect(() => {
    setFavorites(getFavorites())
    setTrips(getTrips())
  }, [])

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            My Travel <span className="text-sky-600">Dashboard</span>
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage your trips and saved destinations in one place.
          </p>
        </div>

        <div className="mt-8 space-y-2 text-sm text-slate-600">
          <p>Saved destinations: {favorites.length}</p>
          <p>Planned trips: {trips.length}</p>
        </div>

      </div>
    </main>
  )
}

export default Dashboard