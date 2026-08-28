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
      <div className="flex items-center rounded-xl border border-sky-200 bg-white p-1.5 shadow-sm transition duration-200 focus-within:border-sky-400 focus-within:shadow-md">
        <i className="fa-solid fa-magnifying-glass ml-4 text-sky-600"></i>

        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search city or country..." className="w-full bg-transparent px-4 py-2.5 text-slate-700 outline-none placeholder:text-slate-400" />

        <button type="submit" className="rounded-lg bg-sky-600 px-7 py-2.5 font-semibold text-white transition duration-200 hover:bg-sky-700">
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar