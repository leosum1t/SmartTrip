import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-sky-200 bg-gradient-to-br from-sky-100 via-sky-200 to-cyan-100 px-5">
      <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full bg-white/50 blur-3xl"></div>
      <div className="absolute -bottom-28 right-10 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl"></div>

      <div className="absolute right-[8%] top-7 hidden items-center lg:flex">
        <span className="w-24 border-t-2 border-dashed border-sky-400/40"></span>
        <i className="fa-solid fa-plane ml-2 rotate-12 text-sm text-sky-500/60"></i>
      </div>

      <div className="relative mx-auto max-w-7xl py-9">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-sm backdrop-blur-sm">
              <img src={logo} alt="SmartYatra" className="h-10 w-auto" />
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
                Smart<span className="text-sky-600">Yatra</span>
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Explore smarter. Travel better.
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-600">
            <Link to="/" className="transition duration-200 hover:text-sky-700">Home</Link>
            <Link to="/explore" className="transition duration-200 hover:text-sky-700">Explore</Link>
            <Link to="/favorites" className="transition duration-200 hover:text-sky-700">Favorites</Link>
            <Link to="/dashboard" className="transition duration-200 hover:text-sky-700">Dashboard</Link>
          </nav>
        </div>

        <div className="relative my-7">
          <div className="border-t border-sky-300/70"></div>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center bg-sky-200 px-4 text-sky-600">
            <i className="fa-solid fa-location-dot text-xs"></i>
            <span className="mx-2 w-8 border-t border-dashed border-sky-400"></span>
            <i className="fa-solid fa-plane text-xs"></i>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SmartYatra. All rights reserved.</p>

          <p>
            Designed & Developed by{" "}
            <span className="font-bold text-slate-700">Sumit Pokharel</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer