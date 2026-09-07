import { useNavigate } from "react-router-dom"
import heroImage from "../assets/home-hero.png"

function Home() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-sky-50">
      <section className="relative min-h-[calc(100vh-70px)] overflow-hidden">
        <img src={heroImage} alt="Mountain lake landscape" className="absolute inset-0 h-full w-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>

        <div className="relative mx-auto flex min-h-[calc(100vh-70px)] max-w-7xl items-center px-5 py-16 md:px-8 lg:px-10">
          <div className="max-w-2xl text-white">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-sky-300"></span>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-200 md:text-sm"
              >Explore the world your way</p>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Plan Smarter.
              <span className="mt-2 block text-sky-300">Travel Further.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              Discover destinations, check weather, explore maps and plan unforgettable journeys with SmartYatra.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={() => navigate("/explore")}
                className="group cursor-pointer rounded-xl bg-sky-500 px-6 py-3 font-semibold 
                text-white shadow-lg shadow-sky-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400">
                Explore Destinations
                <i className="fa-solid fa-arrow-right ml-2 transition duration-300 group-hover:translate-x-1"></i>
              </button>

              <button onClick={() => navigate("/trip-planner")}
                className="cursor-pointer rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white
                 backdrop-blur-sm transition duration-300 hover:bg-white/20">
                <i className="fa-regular fa-map mr-2"></i>
                Plan a Trip
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center text-white/70 md:flex">
          <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em]">Discover More</span>
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home