import { useState, type PropsWithChildren } from "react"
import { PlaceContext } from "./PlaceContext"
import type { Place, PlaceFilters } from "./types"

async function fetchPlaces(filters: PlaceFilters | null = null): Promise<Place[]> {
  const data = await (await fetch(import.meta.env.VITE_SERVER_URL + "/api/places")).json()
  return data
}

export function PlaceProvider({ children }: PropsWithChildren) {
  const [places, setPlaces] = useState<Place[]>([])
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)



  const searchPlaces = async (filters: PlaceFilters | null) => {
    const results = await fetchPlaces(filters)
    setPlaces(results)
  }

  if (places.length === 0) searchPlaces(null)

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
