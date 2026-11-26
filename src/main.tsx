import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { PlaceProvider } from "./context/PlacesProvider"
import PlacesApp from "./pages/PlacesApp"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlaceProvider>
      <PlacesApp />
    </PlaceProvider>
  </StrictMode>,
)
