import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface ForecastState {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: {
    time: string
    temperature_2m: string
    relativehumidity_2m: string
    precipitation: string
    cloudcover: string
    windspeed_10m: string
    winddirection_10m: string
  }
  hourly: {
    time: string[]
    temperature_2m: number[]
    relativehumidity_2m: number[]
    precipitation: number[]
    cloudcover: number[]
    windspeed_10m: number[]
    winddirection_10m: number[]
  }
  daily_units: {
    time: string
    weathercode: string
    temperature_2m_max: string
    temperature_2m_min: string
  }
  daily: {
    time: string[]
    weathercode: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
  }
  status: "idle" | "loaded" | "loading"
}

const initialState: ForecastState = {
  latitude: 0,
  longitude: 0,
  generationtime_ms: 0,
  utc_offset_seconds: 0,
  timezone: "",
  timezone_abbreviation: "",
  elevation: 0,
  hourly_units: {
    time: "",
    temperature_2m: "",
    relativehumidity_2m: "",
    precipitation: "",
    cloudcover: "",
    windspeed_10m: "",
    winddirection_10m: "",
  },
  hourly: {
    time: [],
    temperature_2m: [],
    relativehumidity_2m: [],
    precipitation: [],
    cloudcover: [],
    windspeed_10m: [],
    winddirection_10m: [],
  },
  daily_units: {
    time: "",
    weathercode: "",
    temperature_2m_max: "",
    temperature_2m_min: "",
  },
  daily: {
    time: [],
    weathercode: [],
    temperature_2m_max: [],
    temperature_2m_min: [],
  },
  status: "idle",
}

export const forecastSlice = createSlice({
  name: "Forecast",
  initialState: initialState,
  reducers: {
    updateForecastData: (state, action: PayloadAction<ForecastState>) => {
      return {
        ...action.payload,
        status: "loaded",
      }
    },
  },
})

export const { updateForecastData } = forecastSlice.actions

export const selectForecast = (state: RootState) => state.forecast

export default forecastSlice.reducer
