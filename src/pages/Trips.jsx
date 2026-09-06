import { useEffect, useState } from "react"
import { getTrips } from "../utils/tripUtils"
import TripCard from "../components/TripCard"
import { useNavigate } from "react-router-dom"

function Trips() {
  const [trips, setTrips] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setTrips(getTrips())
  }, [])

  const upcomingTrips = trips
    .filter((trip) => new Date(trip.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))

  const pastTrips = trips
    .filter((trip) => new Date(trip.startDate) < new Date())
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        <button onClick={() => navigate("/dashboard")}
        className="mb-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-900 transition duration-200 hover:text-sky-600">
        <i className="fa-solid fa-arrow-left"></i>
        Back to Dashboard
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            My <span className="text-sky-600">Trips</span>
          </h1>
        </div>

        {upcomingTrips.length > 0 && (
          <section>
            <h2 className="mb-5 text-xl font-bold text-slate-900">Upcoming Trips</h2>

            <div className="grid gap-6 lg:grid-cols-2">
              {upcomingTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </section>
        )}

        {pastTrips.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-5 text-xl font-bold text-slate-900">Past Trips</h2>

            <div className="grid gap-6 lg:grid-cols-2">
              {pastTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </section>
        )}

        {trips.length === 0 && (
          <div className="rounded-3xl border border-dashed border-sky-200 bg-white/70 px-6 py-16 text-center">
            <i className="fa-solid fa-suitcase-rolling text-4xl text-sky-400"></i>
            <h2 className="mt-4 text-xl font-bold text-slate-800">No trips planned yet</h2>
            <p className="mt-2 text-sm text-slate-500">Your saved trips will appear here.</p>
          </div>
        )}

      </div>
    </main>
  )
}

export default Trips