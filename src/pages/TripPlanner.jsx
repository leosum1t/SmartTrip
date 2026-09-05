import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { saveTrip } from "../utils/tripUtils"

function TripPlanner() {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedDestination = location.state?.destination
  const searchedDestination = location.state?.searchedDestination
  const destinations = location.state?.destinations
  const [destination, setDestination] = useState(location.state?.destinationName || "")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [travelers, setTravelers] = useState("")
  const [budget, setBudget] = useState("")
  const [notes, setNotes] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")


  const showError = (text) => {
    setError(text)
    setTimeout(() => setError(""), 4000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setMessage("")

    if (!destination || !startDate || !endDate || !travelers) {
      showError("Please fill in all required fields.")
      return
    }

    if (new Date(endDate) < new Date(startDate)) {
      showError("End date cannot be before start date.")
      return
    }

    if (Number(travelers) < 1) {
      showError("Travelers must be at least 1.")
      return
    }

    if (budget && Number(budget) < 0) {
      showError("Budget cannot be negative.")
      return
    }

    const trip = {
      id: Date.now(),
      destination,
      startDate,
      endDate,
      travelers: Number(travelers),
      budget: budget ? Number(budget) : 0,
      notes,
    }

    saveTrip(trip)

    setMessage("Trip saved successfully")
    setDestination("")
    setStartDate("")
    setEndDate("")
    setTravelers("")
    setBudget("")
    setNotes("")

    setTimeout(() => setMessage(""), 4000)
  }

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-12">
      <div className="mx-auto max-w-5xl">

        {message && (
          <div className="fixed right-6 top-24 z-[1100] rounded-xl border border-green-100 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-lg">
            <i className="fa-solid fa-circle-check mr-2 text-green-500"></i>
            {message}
          </div>
        )}

        {error && (
          <div className="fixed right-6 top-24 z-[1100] rounded-xl border border-red-100 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-lg">
            <i className="fa-solid fa-circle-exclamation mr-2 text-red-500"></i>
            {error}
          </div>
        )}
        
        {selectedDestination && (
        <button onClick={() => navigate(`/destination/${selectedDestination.id}`, {
            state: { destination: selectedDestination, searchedDestination, destinations },
        })}
            className="mb-5 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-900 transition duration-200 hover:text-sky-600">
            <i className="fa-solid fa-arrow-left"></i>
            Back to Destination
        </button>
        )}

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Plan Your <span className="text-sky-600">Trip</span>
          </h1>
        </div>

        <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm md:p-8">

          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">Destination</label>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Enter destination"
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Start Date</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">End Date</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Travelers</label>
                <input type="number" min="1" value={travelers} onChange={(e) => setTravelers(e.target.value)} placeholder="Number of travelers"
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Budget</label>
                <input type="number" min="0" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Enter budget"
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">Notes</label>
                <textarea rows="4" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Add notes for your trip..."
                  className="w-full resize-none rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400"></textarea>
              </div>

            </div>

            <div className="mt-6 flex justify-end">
              <button type="submit"
                className="cursor-pointer rounded-xl border-2 border-sky-600 bg-transparent px-6 py-2.5 font-semibold text-slate-900 transition duration-200 hover:bg-sky-600 hover:text-white">
                Save Trip
              </button>
            </div>
          </form>

        </section>

      </div>
    </main>
  )
}

export default TripPlanner