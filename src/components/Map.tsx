import "leaflet/dist/leaflet.css"
import "react-leaflet-cluster/dist/assets/MarkerCluster.css"
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"

import { usePlaces } from "../context/usePlaces"

function Map() {
  const { places } = usePlaces()

  return (
    <>
      <MapContainer style={{ height: "100dvh" }} center={[62.59, 29.77]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading>
          {places.map(p => <Marker key={p.ID} position={[p.Latitude, p.Longitude]}><Popup>{p.Name}</Popup></Marker>)}</MarkerClusterGroup>
      </MapContainer>
    </>
  )
}

export default Map
