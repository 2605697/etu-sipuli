import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import PlacesApp from "./PlacesApp"
import { PlaceProvider } from "./PlacesProvider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlaceProvider>
      <PlacesApp />
    </PlaceProvider>
  </StrictMode>,
)
