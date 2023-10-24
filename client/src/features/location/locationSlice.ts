import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface GeoCodedLocation {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation: number
  feature_code: string
  country_code: string
  timezone: string
  population: number
  country_id: number
  country: string
  status: "idle" | "loading" | "loaded" | "error"
}

export interface SearchLocationResults {
  results: GeoCodedLocation[]
  generationtime_ms: number
}

const initialState: GeoCodedLocation = {
  id: 0,
  name: "",
  latitude: 0,
  longitude: 0,
  elevation: 0,
  feature_code: "",
  country_code: "",
  timezone: "",
  population: 0,
  country_id: 0,
  country: "",

  status: "idle",
}

export interface GeoCoordinates {
  latitude: number
  longitude: number
}

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<GeoCodedLocation>) => {
      return { ...action.payload, status: "loaded" }
    },
    setLocationCoords: (state, action: PayloadAction<GeoCoordinates>) => {
      // just sets the location coords and status
      return {
        ...initialState,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        status: "loaded",
      }
    },
    setLocationError: (state) => {
      return { ...state, status: "error" }
    },
  },
})

export const { setLocation, setLocationCoords, setLocationError } =
  locationSlice.actions

export const selectLocation = (state: RootState) => state.location

export default locationSlice.reducer
