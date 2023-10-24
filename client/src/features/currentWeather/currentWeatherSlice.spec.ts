import currentWeatherReducer, {
  CurrentWeatherState,
  updateCurrentWeather,
} from "./currentWeatherSlice"

describe("current weather reducer", () => {
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

  const newState: CurrentWeatherState = {
    latitude: 27,
    longitude: 37,
    generationtime_ms: 0.04398822784423828,
    utc_offset_seconds: 10800,
    timezone: "Asia/Riyadh",
    timezone_abbreviation: "+03",
    elevation: 1044,
    current_units: {
      time: "iso8601",
      interval: "seconds",
      temperature_2m: "°C",
      relativehumidity_2m: "%",
      precipitation: "mm",
      windspeed_10m: "km/h",
    },
    current: {
      time: "2023-10-24T21:45",
      interval: 900,
      temperature_2m: 22,
      relativehumidity_2m: 44,
      precipitation: 0,
      windspeed_10m: 6.9,
    },
    status: "loaded",
  }

  it("should handle initial state", () => {
    expect(currentWeatherReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    )
  })

  it("should handle updateCurrentWeather", () => {
    const actual = currentWeatherReducer(
      initialState,
      updateCurrentWeather(newState),
    )
    expect(JSON.stringify(actual)).toEqual(JSON.stringify(newState))
  })
})
