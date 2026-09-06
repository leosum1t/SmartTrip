import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Favorites from "./pages/Favorites"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import DestinationDetails from "./pages/DestinationDetails"
import TripPlanner from "./pages/TripPlanner"
import Trips from "./pages/Trips"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App