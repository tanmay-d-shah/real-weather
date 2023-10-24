import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface CurrentWeatherState {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_units: {
    time: string
    interval: string
    temperature_2m: string
    relativehumidity_2m: string
    precipitation: string
    windspeed_10m: string
  }
  current: {
    time: string
    interval: number
    temperature_2m: number
    relativehumidity_2m: number
    precipitation: number
    windspeed_10m: number
  }
  status: "idle" | "loading" | "loaded"
}

const initialState: CurrentWeatherState = {
  latitude: 0,
  longitude: 0,
  generationtime_ms: 0,
  utc_offset_seconds: 0,
  timezone: "",
  timezone_abbreviation: "",
  elevation: 0,
  current_units: {
    time: "",
    interval: "",
    temperature_2m: "",
    relativehumidity_2m: "",
    precipitation: "",
    windspeed_10m: "",
  },
  current: {
    time: "",
    interval: 0,
    temperature_2m: 0,
    relativehumidity_2m: 0,
    precipitation: 0,
    windspeed_10m: 0,
  },
  status: "idle",
}

export const currentWeatherSlice = createSlice({
  name: "Current Weather",
  initialState: initialState,
  reducers: {
    updateCurrentWeather: (
      state,
      action: PayloadAction<CurrentWeatherState>,
    ) => {
      return {
        ...action.payload,
        status: "loaded",
      }
    },
  },
})

export const { updateCurrentWeather } = currentWeatherSlice.actions

export const selectCurrentWeather = (state: RootState) => state.currentWeather

export default currentWeatherSlice.reducer
