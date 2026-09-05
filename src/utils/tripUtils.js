const TRIPS_KEY = "smartyatra_trips"

export function getTrips() {
    const savedTrips = localStorage.getItem(TRIPS_KEY)
    return savedTrips ? JSON.parse(savedTrips) : []
}

export function saveTrip(trip) {
    const trips = getTrips()
    const updatedTrips = [...trips, trip]
    localStorage.setItem(TRIPS_KEY, JSON.stringify(updatedTrips))
}

export function deleteTrip(tripId) {
    const trips = getTrips()
    const updatedTrips = trips.filter((trip) => trip.id !== tripId)
    localStorage.setItem(TRIPS_KEY, JSON.stringify(updatedTrips))
}