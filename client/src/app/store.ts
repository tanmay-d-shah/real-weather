import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import forecastReducer from "../features/forecast/forecastSlice"
import geoCodingReducer from "../features/location/locationSlice"
import currentWeatherReducer from "../features/currentWeather/currentWeatherSlice"
export const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    location: geoCodingReducer,
    currentWeather: currentWeatherReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
