import locationReducer, {
  GeoCodedLocation,
  setLocation,
  setLocationCoords,
  setLocationError,
} from "./locationSlice"

describe("location reducer", () => {
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

  const newState: GeoCodedLocation = {
    id: 1277333,
    name: "Bengaluru",
    latitude: 12.97194,
    longitude: 77.59369,
    elevation: 920.0,
    feature_code: "PPLA",
    country_code: "IN",
    timezone: "Asia/Kolkata",
    population: 5104047,
    country_id: 1269750,
    country: "India",
    status: "loaded",
  }

  it("should handle initial state", () => {
    expect(locationReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    )
  })

  it("should handle setLocation", () => {
    const actual = locationReducer(initialState, setLocation(newState))
    expect(actual).toEqual(newState)
  })

  it("should handle setLocationCoords", () => {
    const actual = locationReducer(
      initialState,
      setLocationCoords({
        latitude: newState.latitude,
        longitude: newState.longitude,
      }),
    )

    const initialStateWithCoords: GeoCodedLocation = {
      ...initialState,
      latitude: newState.latitude,
      longitude: newState.longitude,
      status: "loaded",
    }
    expect(actual).toEqual(initialStateWithCoords)
  })

  it("should handle setLocationError", () => {
    const actual = locationReducer(initialState, setLocationError())
    expect(actual).toEqual({ ...initialState, status: "error" })
  })
})
