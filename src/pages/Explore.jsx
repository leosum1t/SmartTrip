import { useState } from "react"
import SearchBar from "../components/SearchBar"
import DestinationCard from "../components/DestinationCard"

function Explore() {
  const [searchedDestination, setSearchedDestination] = useState("")
  const destinations = [
  {
    id: 1,
    city: "Kathmandu",
    country: "Nepal",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    city: "Tokyo",
    country: "Japan",
    region: "Asia",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    city: "Paris",
    country: "France",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    city: "Sydney",
    country: "Australia",
    region: "Oceania",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80",
  },
]

  const handleSearch = (query) => {
    setSearchedDestination(query)
  }

  const filteredDestinations = destinations.filter((destination) =>
    destination.city.toLowerCase().includes(searchedDestination.toLowerCase()) ||
    destination.country.toLowerCase().includes(searchedDestination.toLowerCase())
  )

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
        
          {searchedDestination ? (
            filteredDestinations.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredDestinations.map((destination) => (
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