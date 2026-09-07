import { useNavigate } from "react-router-dom"
import heroImage from "../assets/home-hero.png"
import kathmanduImage from "../assets/kathmandu.png"
import parisImage from "../assets/paris.png"
import tokyoImage from "../assets/tokyo.png"
import slideImage from "../assets/slide.png"

function Home() {
  const navigate = useNavigate()

  const featuredDestinations = [
    { name: "Kathmandu", country: "Nepal", image: kathmanduImage },
    { name: "Tokyo", country: "Japan", image: tokyoImage },
    { name: "Paris", country: "France", image: parisImage },
  ]
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
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-200 md:text-sm">Explore the world your way</p>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Plan Smarter.
              <span className="mt-2 block text-sky-300">Travel Further.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              Discover destinations, check weather, explore maps and plan unforgettable journeys with SmartYatra.
            </p>

            <div className="mt-8">
              <button onClick={() => navigate("/explore")}
                className="group cursor-pointer rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20">
                Explore Destinations
                <i className="fa-solid fa-arrow-right ml-2 transition duration-300 group-hover:translate-x-1"></i>
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

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600">Discover</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Featured <span className="text-sky-600">Destinations</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredDestinations.map((destination) => (
              <div key={destination.name}
                className="group relative h-[280px] overflow-hidden rounded-3xl shadow-sm sm:h-[300px] lg:h-[320px]">
                <img src={destination.image} alt={destination.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2 flex items-center gap-2 text-sm text-white/75">
                    <i className="fa-solid fa-location-dot text-sky-300"></i>
                    {destination.country}
                  </div>
                  <h3 className="text-2xl font-extrabold">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button onClick={() => navigate("/explore")}
              className="group cursor-pointer font-semibold text-slate-700 transition hover:text-sky-600">
              Explore More Destinations
              <i className="fa-solid fa-arrow-right ml-2 transition group-hover:translate-x-1"></i>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-sky-50 px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600">Smart Travel Tools</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Everything You Need to <span className="text-sky-600">Travel Smarter</span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Weather & Forecast",
                  text: "Check current weather and upcoming forecasts before you travel.",
                  icon: "fa-solid fa-cloud-sun",
                  box: "bg-sky-100 text-sky-600",
                },
                {
                  title: "Interactive Maps",
                  text: "Explore destination locations and understand the surrounding area.",
                  icon: "fa-solid fa-map-location-dot",
                  box: "bg-emerald-100 text-emerald-600",
                },
                {
                  title: "Currency Converter",
                  text: "Convert currencies quickly while planning your travel budget.",
                  icon: "fa-solid fa-coins",
                  box: "bg-amber-100 text-amber-600",
                },
                {
                  title: "Save Favorites",
                  text: "Save destinations you love and revisit them whenever you want.",
                  icon: "fa-solid fa-heart",
                  box: "bg-red-100 text-red-500",
                },
                {
                  title: "Trip Planner",
                  text: "Organize your destination, dates, travelers, budget and notes.",
                  icon: "fa-solid fa-suitcase-rolling",
                  box: "bg-violet-100 text-violet-600",
                },
                {
                  title: "Travel Dashboard",
                  text: "Keep saved places and planned journeys together in one place.",
                  icon: "fa-solid fa-chart-simple",
                  box: "bg-slate-100 text-slate-700",
                },
              ].map((tool) => (
                <div key={tool.title}
                  className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg ${tool.box}`}>
                    <i className={tool.icon}></i>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">{tool.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{tool.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
       <section className="overflow-hidden bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              How <span className="text-sky-600">SmartYatra</span> Works
            </h2>
          </div>

          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">

            <div className="group relative min-h-[220px]">
              <span className="absolute right-0 top-0 text-7xl font-black leading-none text-sky-100">01</span>

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <i className="fa-solid fa-compass"></i>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600">Discover</span>
                  <span className="h-px w-16 bg-sky-200"></span>
                </div>

                <h3 className="max-w-sm text-3xl font-extrabold leading-tight text-slate-900">
                  Find somewhere <span className="text-sky-600">worth going.</span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                  Search destinations and discover the place that could become your next adventure.
                </p>
              </div>
            </div>

            <div className="group relative min-h-[220px]">
              <span className="absolute right-0 top-0 text-7xl font-black leading-none text-emerald-100">02</span>

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">Explore</span>
                  <span className="h-px w-16 bg-emerald-200"></span>
                </div>

                <h3 className="max-w-sm text-3xl font-extrabold leading-tight text-slate-900">
                  Know before <span className="text-emerald-600">you go.</span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                  Check weather, forecasts, maps and currency so you know what to expect.
                </p>
              </div>
            </div>

            <div className="group relative min-h-[220px]">
              <span className="absolute right-0 top-0 text-7xl font-black leading-none text-red-100">03</span>

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <i className="fa-solid fa-heart"></i>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">Save</span>
                  <span className="h-px w-16 bg-red-200"></span>
                </div>

                <h3 className="max-w-sm text-3xl font-extrabold leading-tight text-slate-900">
                  Keep what <span className="text-red-500">inspires you.</span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                  Save the destinations you love and keep your travel ideas close.
                </p>
              </div>
            </div>

            <div className="group relative min-h-[220px]">
              <span className="absolute right-0 top-0 text-7xl font-black leading-none text-violet-100">04</span>

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    <i className="fa-solid fa-plane-departure"></i>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-violet-600">Plan & Go</span>
                  <span className="h-px w-16 bg-violet-200"></span>
                </div>

                <h3 className="max-w-sm text-3xl font-extrabold leading-tight text-slate-900">
                  Turn ideas into <span className="text-violet-600">a journey.</span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                  Set dates, travelers and budget, then manage your journey from the dashboard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-white px-5 pb-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
          <img src={slideImage} alt="Travel adventure" className="absolute inset-0 h-full w-full object-cover" />

          <div className="absolute inset-0 bg-slate-950/55"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/30 to-transparent"></div>

          <div className="relative flex min-h-[420px] items-center px-7 py-14 sm:px-10 md:px-14 lg:px-16">
            <div className="max-w-2xl text-white">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-sky-300"></span>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-200">
                  Your Journey Starts Here
                </p>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                The world is waiting.
                <span className="block text-sky-300">Where will you go next?</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 md:text-base">
                Discover somewhere new, save the places that inspire you and turn your next idea into a journey.
              </p>

              <div className="mt-8">
                <button onClick={() => navigate("/explore")}
                  className="group cursor-pointer rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20">
                  Explore Destinations
                  <i className="fa-solid fa-arrow-right ml-2 transition duration-300 group-hover:translate-x-1"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-7 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 md:flex">
            SmartYatra
            <span className="h-px w-12 bg-white/30"></span>
            Explore More
          </div>
        </div>
      </section>
    </main>
  )
}
export default Home