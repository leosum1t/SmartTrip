import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"
import DestinationCard from "../components/DestinationCard"
import { searchLocations } from "../services/locationService"
import { getDestinationImage } from "../services/imageService"
import expHero from "../assets/expHero.png"

function Explore() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchedDestination, setSearchedDestination] = useState(location.state?.searchedDestination || "")
  const [destinations, setDestinations] = useState(location.state?.destinations || [])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [favoriteMessage, setFavoriteMessage] = useState("")
  const [favoriteAdded, setFavoriteAdded] = useState(false)

  useEffect(() => {
    if (location.state) {
      navigate(location.pathname, { replace: true, state: null })
    }
  }, [])

  const handleFavoriteMessage = (message, added) => {
    setFavoriteMessage(message)
    setFavoriteAdded(added)
    setTimeout(() => setFavoriteMessage(""), 4000)
  }

  const handleSearch = async (query) => {
    setSearchedDestination(query)
    setLoading(true)
    setError("")

    try {
      const results = await searchLocations(query)
      const destinationsWithImages = await Promise.all(
        results.map(async (destination) => {
          const image = await getDestinationImage(`${destination.name} ${destination.country} travel`)
          return { ...destination, image }
        })
      )

      setDestinations(destinationsWithImages)
    } catch (error) {
      setDestinations([])
      setError("Unable to load destinations. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-sky-50">
      {favoriteMessage && (
        <div className="fixed right-6 top-24 z-[1100] rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-lg">
          <i className={`mr-2 ${favoriteAdded ? "fa-solid text-red-500" : "fa-regular text-slate-500"} fa-heart`}></i>
          {favoriteMessage}
        </div>
      )}

      <section className="relative min-h-[240px] overflow-hidden">
        <img src={expHero} alt="Explore destinations"
          className="absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)] scale-105 object-cover blur-[2px]" />

        <div className="absolute inset-0 bg-slate-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-slate-950/20"></div>

        <div className="relative mx-auto flex min-h-[240px] max-w-7xl flex-col items-center justify-center px-5 py-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Discover Your Next <span className="text-sky-300">Destination</span>
          </h1>

          <div className="mt-5 w-full max-w-3xl">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-8">
        <section>
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
              <>
                <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-600">
                      Search Results
                    </p>
                  </div>

                  <p className="text-sm font-medium text-slate-500">
                    {destinations.length} {destinations.length === 1 ? "destination" : "destinations"} found
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {destinations.map((destination) => (
                    <DestinationCard
                      key={destination.id}
                      destination={destination}
                      image={destination.image}
                      searchedDestination={searchedDestination}
                      destinations={destinations}
                      onFavoriteMessage={handleFavoriteMessage}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-sky-100 bg-white px-5 py-10 text-center shadow-sm sm:p-10">
                <i className="fa-solid fa-magnifying-glass text-3xl text-sky-300"></i>
                <h3 className="mt-4 text-lg font-semibold text-slate-800">No destination found</h3>
                <p className="mt-2 text-sm text-slate-500">
                  We couldn't find anything for "{searchedDestination}". Try another city or country.
                </p>
              </div>
            )
          ) : (
            <div className="rounded-3xl border border-dashed border-sky-200 bg-white/70 px-5 py-10 text-center">
              <i className="fa-regular fa-compass text-4xl text-sky-400"></i>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">Where do you want to go?</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Search for a city or country and start exploring.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default Explore