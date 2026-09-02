import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

function DestinationMap({ latitude, longitude, name, country }) {
   return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm">
      <MapContainer center={[latitude, longitude]} zoom={11} className="h-[400px] w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[latitude, longitude]} icon={markerIcon}>
          <Popup>
            <strong>{name}</strong>
            <br />
            {country}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default DestinationMap