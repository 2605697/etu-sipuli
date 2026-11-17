import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { usePlaces } from "./usePlaces"

function Map() {
  const context = usePlaces()

  return (
    <>
      <MapContainer style={{ height: "400px" }} center={[62.59, 29.77]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {context.places.map(p => <Marker key={p.ID} position={[p.Latitude, p.Longitude]}><Popup>{p.Name}</Popup></Marker>)}
      </MapContainer>

    </>
  )
}

export default Map
