function TripCard({ trip }) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })

  const travelerCount = String(trip.travelers).padStart(2, "0")

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="relative p-6">
        <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-sky-50"></div>
        <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-sky-50"></div>

        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
            SmartYatra
          </p>

          <div className="flex items-center gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Boarding Pass
            </p>
            <i className="fa-solid fa-plane text-sm text-sky-600"></i>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Destination
          </p>
          <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
            {trip.destination}
          </h3>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Departure
            </p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              {formatDate(trip.startDate)}
            </p>
          </div>

          <div className="flex items-center">
            <span className="w-6 border-t border-dashed border-sky-300 sm:w-10"></span>

            <div className="mx-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-xs text-sky-600">
              <i className="fa-solid fa-plane"></i>
            </div>

            <span className="w-6 border-t border-dashed border-sky-300 sm:w-10"></span>
          </div>

          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Return
            </p>
            <p className="mt-1 text-lg font-extrabold text-slate-900">
              {formatDate(trip.endDate)}
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-dashed border-sky-200 pt-4">
          <div className="grid grid-cols-2 gap-5">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Passengers
              </p>

              <div className="mt-1 flex items-center gap-2">
                <i className="fa-solid fa-user-group text-sky-600"></i>
                <span className="text-lg font-extrabold text-slate-900">
                  {travelerCount}
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Budget
              </p>

              <div className="mt-1 flex items-center justify-end gap-2">
                <i className="fa-solid fa-wallet text-sky-600"></i>
                <span className="font-bold text-slate-900">
                  {trip.budget > 0 ? trip.budget : "Not set"}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default TripCard