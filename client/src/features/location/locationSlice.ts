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
  admin1_id: number
  admin3_id: number
  admin4_id: number
  timezone: string
  population: number
  postcodes: string[]
  country_id: number
  country: string
  admin1: string
  admin3: string
  admin4: string
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
  admin1_id: 0,
  admin3_id: 0,
  admin4_id: 0,
  timezone: "",
  population: 0,
  postcodes: [],
  country_id: 0,
  country: "",
  admin1: "",
  admin3: "",
  admin4: "",
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
