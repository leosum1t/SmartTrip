import { useState } from "react"

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    onSearch(query.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-5xl px-2">
      <div className="flex items-center gap-3">

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city or country..."
          className="w-full border border-sky-300 bg-white/90 px-4 py-2.5 text-slate-700 outline-none backdrop-blur-sm transition duration-200 placeholder:text-slate-400 focus:border-sky-500"
        />

        <button
          type="submit"
          className="group flex shrink-0 cursor-pointer items-center border border-sky-400 bg-white/90 px-7 py-2.5 font-semibold text-slate-800 backdrop-blur-sm transition duration-200 hover:bg-sky-500 hover:text-white"
        >
          Search
          <i className="fa-solid fa-arrow-right ml-2 transition duration-200 group-hover:translate-x-1"></i>
        </button>

      </div>
    </form>
  )
}

export default SearchBar