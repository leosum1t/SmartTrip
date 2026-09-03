import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center gap-2 pb-1 font-medium transition-all duration-200 ${
      isActive
        ? "text-sky-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-sky-500"
        : "text-slate-600 hover:text-sky-600"
    }`

  return (
    <nav className="sticky top-0 z-[1000] border-b border-sky-100/70 bg-sky-50/70 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        <NavLink to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="SmartYatra logo" className="h-11 w-11 object-contain" />
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">Smart<span className="text-sky-600">Yatra</span></span>
        </NavLink>

        <div className="hidden items-center gap-9 md:flex">
          <NavLink to="/" className={navLinkClass}><i className="fa-solid fa-house"></i> Home</NavLink>
          <NavLink to="/explore" className={navLinkClass}><i className="fa-regular fa-compass"></i> Explore</NavLink>
          <NavLink to="/favorites" className={navLinkClass}><i className="fa-regular fa-heart"></i> Favorites</NavLink>
          <NavLink to="/dashboard" className={navLinkClass}><i className="fa-solid fa-chart-bar"></i> Dashboard</NavLink>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-white/60 text-xl text-slate-700 transition hover:bg-white md:hidden" aria-label="Toggle navigation">
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-sky-100 bg-sky-50/90 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}><i className="fa-solid fa-house"></i> Home</NavLink>
            <NavLink to="/explore" className={navLinkClass} onClick={() => setMenuOpen(false)}><i className="fa-regular fa-compass"></i> Explore</NavLink>
            <NavLink to="/favorites" className={navLinkClass} onClick={() => setMenuOpen(false)}><i className="fa-regular fa-heart"></i> Favorites</NavLink>
            <NavLink to="/dashboard" className={navLinkClass} onClick={() => setMenuOpen(false)}><i className="fa-solid fa-chart-bar"></i> Dashboard</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar