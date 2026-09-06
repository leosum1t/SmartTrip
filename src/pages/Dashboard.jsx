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

  const upcomingTrips = trips
    .filter((trip) => new Date(trip.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))

  const nextTrip = upcomingTrips[0]

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Your Next <span className="text-sky-600">Adventure Awaits</span>
          </h1>

          <div className="hidden items-center gap-3 text-sky-400 md:flex">
            <span className="h-px w-12 bg-sky-200"></span>
            <i className="fa-solid fa-plane"></i>
            <span className="h-px w-20 bg-sky-200"></span>
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr]">

          <div className="group relative overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-white to-red-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red-100/60"></div>

            <div className="relative flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-500 shadow-sm">
                <i className="fa-solid fa-heart text-lg"></i>
              </div>

              <span className="text-5xl font-extrabold text-slate-900">
                {favorites.length}
              </span>
            </div>

            <div className="relative mt-6">
              <p className="text-base font-bold text-slate-800">
                Saved Places
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Places waiting to be explored
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-100/70"></div>

            <div className="relative flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 shadow-sm">
                <i className="fa-solid fa-suitcase-rolling text-lg"></i>
              </div>

              <span className="text-5xl font-extrabold text-slate-900">
                {trips.length}
              </span>
            </div>

            <div className="relative mt-6">
              <p className="text-base font-bold text-slate-800">
                Planned Trips
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Adventures waiting ahead
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-sky-600 p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <i className="fa-solid fa-location-dot absolute -bottom-6 -right-3 text-8xl text-white/10"></i>

            <div className="absolute right-16 top-5 text-white/10">
              <i className="fa-solid fa-plane text-5xl"></i>
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 text-sm font-semibold text-sky-100">
                <i className="fa-solid fa-location-arrow"></i>
                Next Adventure
              </div>

              {nextTrip ? (
                <div className="mt-5">
                  <h2 className="text-2xl font-bold">
                    {nextTrip.destination}
                  </h2>

                  <div className="mt-4 flex items-center gap-2 text-sm text-sky-100">
                    <i className="fa-regular fa-calendar"></i>
                    {nextTrip.startDate} - {nextTrip.endDate}
                  </div>
                </div>
              ) : (
                <p className="mt-5 text-sm text-sky-100">
                  No upcoming trip planned yet.
                </p>
              )}
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}

export default Dashboard