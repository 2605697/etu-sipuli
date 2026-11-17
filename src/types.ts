export type Place = {
  ID: number
  Name: string
  UserID: number
  Latitude: number
  Longitude: number
}

export type PlaceFilters = {
  distance?: number
}

export interface IPlaceContext {
  places: Place[]
  selectedPlace: Place | null

  searchPlaces: (filters: PlaceFilters) => Promise<void>
  selectPlace: (place: Place | null) => void
}
