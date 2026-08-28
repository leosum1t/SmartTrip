import { useState } from "react"
import SearchBar from "../components/SearchBar"

function Explore() {
  const [searchedDestination, setSearchedDestination] = useState("")

  const handleSearch = (query) => {
    setSearchedDestination(query)
  }

  return (
    <main className="min-h-screen bg-sky-50 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Explore</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Discover Your Next Destination</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Search destinations, explore useful travel information, and find inspiration for your next journey.
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />

        <section className="mt-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-slate-900">Destinations</h2>
            <p className="mt-1 text-sm text-slate-500">Find a place you'd love to explore.</p>
          </div>

          {searchedDestination ? (
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
              <p className="text-slate-600">
                Showing results for <span className="font-semibold text-sky-600">{searchedDestination}</span>
              </p>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-sky-200 bg-white/60 px-6 py-16 text-center">
              <i className="fa-regular fa-compass text-4xl text-sky-400"></i>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">Where do you want to go?</h3>
              <p className="mt-2 text-sm text-slate-500">Search for a city or country and start exploring.</p>
            </div>
          )}

        </section>

      </div>
    </main>
  )
}

export default Explore