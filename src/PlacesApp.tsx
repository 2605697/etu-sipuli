import Sidebar from "./Sidebar.tsx"
import Map from "./Map"


function PlacesApp() {
  return (
    <div className="position-relative">
      <Map />
      <Sidebar />
    </div>
  )
}

export default PlacesApp
