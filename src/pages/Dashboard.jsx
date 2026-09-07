import TripCard from "../components/TripCard"
import SavedDestinationCard from "../components/SavedDestinationCard"
import { useEffect, useState } from "react"
import { getFavorites } from "../utils/favoriteUtils"
import { getTrips } from "../utils/tripUtils"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const [favorites, setFavorites] = useState([])
  const [trips, setTrips] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setFavorites(getFavorites())
    setTrips(getTrips())
  }, [])

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcomingTrips = trips
    .filter((trip) => {
      const startDate = new Date(`${trip.startDate}T00:00:00`)
      return startDate >= today
    })
    .sort(
      (a, b) =>
        new Date(`${a.startDate}T00:00:00`) -
        new Date(`${b.startDate}T00:00:00`)
    )

  const nextTrip = upcomingTrips[0]

  const formatDate = (date) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between gap-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Your Next <span className="text-sky-600">Adventure Awaits</span>
          </h1>

          <div className="hidden shrink-0 items-center gap-3 text-sky-400 md:flex">
            <span className="h-px w-12 bg-sky-200"></span>
            <i className="fa-solid fa-plane"></i>
            <span className="h-px w-20 bg-sky-200"></span>
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr]">

          <div
            onClick={() =>
              navigate("/favorites", {
                state: { fromDashboard: true },
              })
            }
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-white to-red-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >

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

          <div
            onClick={() => navigate("/trips")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >

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

          <div className="relative overflow-hidden rounded-3xl border border-sky-200 bg-sky-600 p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:col-span-2 lg:col-span-1">

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
                  <h2
                    className="max-w-[85%] break-words text-2xl font-bold leading-tight"
                    title={nextTrip.destination}
                  >
                    {nextTrip.destination}
                  </h2>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-sky-100">
                    <i className="fa-regular fa-calendar"></i>

                    <span>
                      {formatDate(nextTrip.startDate)} -{" "}
                      {formatDate(nextTrip.endDate)}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-5">
                  <p className="text-sm text-sky-100">
                    No upcoming trip planned yet.
                  </p>
                </div>
              )}
            </div>

          </div>

        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-900">
              Upcoming Trips
            </h2>

            {trips.length > 0 && (
              <button
                onClick={() => navigate("/trips")}
                className="cursor-pointer text-sm font-semibold text-sky-600 transition hover:text-sky-700"
              >
                View All
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            )}
          </div>

          {upcomingTrips.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {upcomingTrips.slice(0, 2).map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-sky-200 bg-white/70 px-6 py-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-500">
                <i className="fa-solid fa-plane-departure"></i>
              </div>

              <h3 className="mt-4 font-bold text-slate-800">
                No upcoming trips
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Your next planned adventure will appear here.
              </p>
            </div>
          )}
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-900">
              Saved Destinations
            </h2>

            {favorites.length > 0 && (
              <button
                onClick={() =>
                  navigate("/favorites", {
                    state: { fromDashboard: true },
                  })
                }
                className="cursor-pointer text-sm font-semibold text-sky-600 transition hover:text-sky-700"
              >
                View All
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            )}
          </div>

          {favorites.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {favorites.slice(0, 3).map((destination) => (
                <SavedDestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-red-100 bg-white/70 px-6 py-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-400">
                <i className="fa-regular fa-heart"></i>
              </div>

              <h3 className="mt-4 font-bold text-slate-800">
                No saved destinations
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Places you save will appear here.
              </p>
            </div>
          )}
        </section>

      </div>
    </main>
  )
}

export default Dashboard