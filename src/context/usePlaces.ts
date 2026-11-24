import { useContext } from "react"
import { PlaceContext } from "./PlaceContext"

export function usePlaces() {
  const context = useContext(PlaceContext)

  if (!context) {
    throw new Error("usePlaces must be used within PlaceProvider")
  }

  return context
}
