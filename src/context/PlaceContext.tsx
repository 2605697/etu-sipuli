import { type Context,createContext } from "react"

import type { IPlaceContext } from "../types"

export const PlaceContext: Context<IPlaceContext | undefined> =
  createContext<IPlaceContext | undefined>(undefined)

