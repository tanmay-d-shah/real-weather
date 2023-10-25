import { GeoCodedLocation, SearchLocationResults } from "./locationSlice"

export async function fetchSearchLocationResults(searchString: string) {
  const searchLocationResposne = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${searchString}&count=5&language=en&format=json`,
  )
  const searchLocationResults =
    (await searchLocationResposne.json()) as SearchLocationResults

  if (
    !searchLocationResults.results ||
    searchLocationResults.results.length === 0
  ) {
    return searchLocationResults
  }

  const resultsWithStatus = searchLocationResults.results.map((result) => {
    return {
      ...result,
      status: "idle",
    } as GeoCodedLocation
  })

  searchLocationResults.results = resultsWithStatus

  return searchLocationResults
}
