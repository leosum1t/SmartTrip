import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Favorites from "./pages/Favorites"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App ;