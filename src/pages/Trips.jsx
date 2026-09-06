import { useEffect, useState } from "react"
import { deleteTrip, getTrips } from "../utils/tripUtils"
import { useNavigate } from "react-router-dom"

function Trips() {
  const [trips, setTrips] = useState([])
  const navigate = useNavigate()
  const [message, setMessage] = useState("")

  useEffect(() => {
    setTrips(getTrips())
  }, [])

  const upcomingTrips = trips
    .filter((trip) => new Date(trip.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))

  const pastTrips = trips
    .filter((trip) => new Date(trip.startDate) < new Date())
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })

  const handleDelete = (tripId) => {
    deleteTrip(tripId)
    setTrips(getTrips())
    setMessage("Trip deleted successfully")

    setTimeout(() => setMessage(""), 4000)
  }

  const TripTable = ({ data, status }) => (
    <>
      <div className="hidden overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-left">

            <thead className="bg-sky-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="w-[30%] px-6 py-4 font-semibold">Destination</th>
                <th className="w-[13%] px-6 py-4 font-semibold">Start Date</th>
                <th className="w-[13%] px-6 py-4 font-semibold">End Date</th>
                <th className="w-[10%] px-6 py-4 font-semibold">Travelers</th>
                <th className="w-[10%] px-6 py-4 font-semibold">Budget</th>
                <th className="w-[10%] px-6 py-4 font-semibold">Status</th>
                <th className="w-[14%] px-6 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-sky-50">
              {data.map((trip) => (
                <tr key={trip.id} className="transition hover:bg-sky-50/60">
                  <td className="whitespace-normal break-words px-6 py-5 font-bold text-slate-900">
                    {trip.destination}
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-600">
                    {formatDate(trip.startDate)}
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-600">
                    {formatDate(trip.endDate)}
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-600">
                    {trip.travelers}
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-700">
                    {trip.budget > 0 ? trip.budget : "Not set"}
                  </td>

                  <td className="px-6 py-5">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      status === "Upcoming"
                        ? "bg-sky-100 text-sky-700"
                        : "bg-slate-100 text-slate-500"
                    }`}>
                      {status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-3">
                      <button type="button"
                        className="cursor-pointer rounded-lg border border-sky-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600">
                        <i className="fa-regular fa-pen-to-square mr-2"></i>
                        Edit
                      </button>

                      <button type="button" onClick={() => handleDelete(trip.id)}
                        className="cursor-pointer rounded-lg border border-red-100 px-3 py-2 text-sm font-semibold text-red-500 transition hover:border-red-300 hover:bg-red-50">
                        <i className="fa-regular fa-trash-can mr-2"></i>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      <div className="space-y-4 md:hidden">
        {data.map((trip) => (
          <div key={trip.id} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{trip.destination}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
                </p>
              </div>

              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                status === "Upcoming"
                  ? "bg-sky-100 text-sky-700"
                  : "bg-slate-100 text-slate-500"
              }`}>
                {status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Travelers</p>
                <p className="mt-1 font-semibold text-slate-700">{trip.travelers}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Budget</p>
                <p className="mt-1 font-semibold text-slate-700">{trip.budget > 0 ? trip.budget : "Not set"}</p>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button type="button"
                className="flex-1 cursor-pointer rounded-xl border border-sky-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600">
                <i className="fa-regular fa-pen-to-square mr-2"></i>
                Edit
              </button>

              <button type="button" onClick={() => handleDelete(trip.id)}
                className="flex-1 cursor-pointer rounded-xl border border-red-100 px-4 py-2 text-sm font-semibold text-red-500 transition hover:border-red-300 hover:bg-red-50">
                <i className="fa-regular fa-trash-can mr-2"></i>
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>
    </>
  )

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        {message && (
          <div className="fixed right-6 top-24 z-[1100] rounded-xl border border-red-100 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-lg">
            <i className="fa-regular fa-trash-can mr-2 text-red-500"></i>
            {message}
          </div>
        )}

        <button onClick={() => navigate("/dashboard")}
          className="mb-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-900 transition duration-200 hover:text-sky-600">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Dashboard
        </button>

        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Manage Your <span className="text-sky-600">Journeys</span>
            </h1>
          </div>

          <div className="hidden items-center gap-3 text-sky-400 md:flex">
            <span className="h-px w-10 bg-sky-200"></span>
            <i className="fa-solid fa-plane-departure"></i>
            <span className="h-px w-16 bg-sky-200"></span>
          </div>
        </div>

        {upcomingTrips.length > 0 && (
          <section>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <i className="fa-solid fa-plane-departure"></i>
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Upcoming Trips
              </h2>
            </div>

            <TripTable data={upcomingTrips} status="Upcoming" />
          </section>
        )}

        {pastTrips.length > 0 && (
          <section className="mt-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <i className="fa-solid fa-clock-rotate-left"></i>
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Past Trips
              </h2>
            </div>

            <TripTable data={pastTrips} status="Past" />
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