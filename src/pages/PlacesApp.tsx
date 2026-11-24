import Sidebar from "../components/Sidebar"
import Map from "../components/Map"


function PlacesApp() {
  return (
    <div className="position-relative">
      <Map />
      <Sidebar />
    </div>
  )
}

export default PlacesApp
