import { useState, type PropsWithChildren } from "react"
import { PlaceContext } from "./PlaceContext"
import type { Place, PlaceFilters } from "../types"

const fetchPlaces = async (filters: PlaceFilters | null = null): Promise<Place[]> => {
  if (filters) { console.log("implement filters") }
  return await (await fetch(import.meta.env.VITE_SERVER_URL + "/api/places")).json()
}

export function PlaceProvider({ children }: PropsWithChildren) {
  const [places, setPlaces] = useState<Place[]>([])
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)

  const searchPlaces = async (filters: PlaceFilters | null = null) => {
    const results = await fetchPlaces(filters)
    setPlaces(results)
  }

  if (places.length === 0) searchPlaces()

  const selectPlace = (place: Place | null) => {
    setSelectedPlace(place)
  }

  return (
    <PlaceContext.Provider
      value={{
        places,
        selectedPlace,
        searchPlaces,
        selectPlace,
      }}
    >
      {children}
    </PlaceContext.Provider>
  )
}
