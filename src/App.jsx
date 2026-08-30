import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Favorites from "./pages/Favorites"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import DestinationDetails from "./pages/DestinationDetails"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App ;