import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function DestinationMap({ latitude, longitude }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm">
      <MapContainer center={[latitude, longitude]} zoom={11} className="h-[400px] w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default DestinationMap