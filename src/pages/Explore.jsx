import { useState } from "react"
import SearchBar from "../components/SearchBar"
import DestinationCard from "../components/DestinationCard"
import { searchLocations } from "../services/locationService"

function Explore() {
  const [searchedDestination, setSearchedDestination] = useState("")
  const [destinations, setDestinations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSearch = async (query) => {
  setSearchedDestination(query)
  setLoading(true)
  setError("")

  try {
    const results = await searchLocations(query)
    setDestinations(results)
  } catch (error) {
    setDestinations([])
    setError("Unable to load destinations. Please try again.")
  } finally {
    setLoading(false)
  }}

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Discover Your Next <span className="text-sky-600">Destination</span>
          </h1>
        </div>

        <SearchBar onSearch={handleSearch} />

        <section className="mt-12">
        
          {loading ? (
            <div className="rounded-2xl border border-sky-100 bg-white px-5 py-12 text-center shadow-sm">
            <i className="fa-solid fa-spinner fa-spin text-3xl text-sky-600"></i>
            <p className="mt-3 text-sm text-slate-500">Searching destinations...</p>
          </div>
          ) : error ? (
            <div className="rounded-2xl border border-red-100 bg-white px-5 py-10 text-center shadow-sm">
              <i className="fa-solid fa-circle-exclamation text-3xl text-red-400"></i>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">Something went wrong</h3>
              <p className="mt-2 text-sm text-slate-500">{error}</p>
            </div>
          ) : searchedDestination ? (
            destinations.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-sky-100 bg-white px-5 py-10 text-center shadow-sm sm:p-10">
                  <i className="fa-solid fa-magnifying-glass text-3xl text-sky-300"></i>
                  <h3 className="mt-4 text-lg font-semibold text-slate-800">No destination found</h3>
                  <p className="mt-2 text-sm text-slate-500">We couldn't find anything for "{searchedDestination}". Try another city or country.</p>
                </div>
              )
            ) : (
           <div className="rounded-3xl border border-dashed border-sky-200 bg-white/70 px-5 py-12 text-center sm:px-6 sm:py-16">
            <i className="fa-regular fa-compass text-4xl text-sky-400"></i>
            <h3 className="mt-4 text-lg font-semibold text-slate-800">Where do you want to go?</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Search for a city or country and start exploring.</p>
          </div>
          )}

        </section>

      </div>
    </main>
  )
}

export default Explore