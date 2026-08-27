import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-slate-900">
          SmartTrip
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate-600 hover:text-slate-900">
            Home
          </Link>

          <Link to="/explore" className="text-slate-600 hover:text-slate-900">
            Explore
          </Link>

          <Link to="/favorites" className="text-slate-600 hover:text-slate-900">
            Favorites
          </Link>

          <Link to="/dashboard" className="text-slate-600 hover:text-slate-900">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar