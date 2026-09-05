function TripPlanner() {
  return (
    <main className="min-h-screen bg-sky-50 px-5 py-12">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Plan Your <span className="text-sky-600">Trip</span>
          </h1>
        </div>

        <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm md:p-8">

          <div className="grid gap-5 md:grid-cols-2">

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Destination</label>
              <input type="text" placeholder="Enter destination"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Start Date</label>
              <input type="date"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">End Date</label>
              <input type="date"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Travelers</label>
              <input type="number" min="1" placeholder="Number of travelers"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Budget</label>
              <input type="number" min="0" placeholder="Enter budget"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400" />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Notes</label>
              <textarea rows="4" placeholder="Add notes for your trip..."
                className="w-full resize-none rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-slate-800 outline-none transition hover:border-sky-300 focus:border-sky-400"></textarea>
            </div>

          </div>

          <div className="mt-6 flex justify-end">
            <button type="button"
              className="cursor-pointer rounded-xl border-2 border-sky-600 bg-transparent px-6 py-2.5 font-semibold text-slate-900 transition duration-200 hover:bg-sky-600 hover:text-white">
              Save Trip
            </button>
          </div>

        </section>

      </div>
    </main>
  )
}

export default TripPlanner