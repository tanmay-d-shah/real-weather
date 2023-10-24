import dayjs from "dayjs"
import { ForecastState } from "../features/forecast/forecastSlice"

export type HourlyDayForecastData = {
  temperature: number[]
  precipitaion: number[]
  humidity: number[]
  cloudCover: number[]
  windSpeed: number[]
  windDirection: number[]
}
export function buildHourlyDayForecastMap(forecastData: ForecastState) {
  const hourlyTimeData = forecastData.hourly.time
  const hourlyDayForecastMap = hourlyTimeData.reduce(function (
    map,
    time,
    index,
  ) {
    const day = dayjs(time).format("DD-MM-YYYY")
    const hourlyTemperature = forecastData.hourly.temperature_2m[index]
    const hourlyPrecipitation = forecastData.hourly.precipitation[index]
    const hourlyHumidity = forecastData.hourly.relativehumidity_2m[index]
    const hourlyCloudCover = forecastData.hourly.cloudcover[index]
    const hourlyWindSpeed = forecastData.hourly.windspeed_10m[index]
    const hourlyWindDirection = forecastData.hourly.winddirection_10m[index]

    if (map.has(day)) {
      const dayData = map.get(day)
      if (dayData) {
        dayData["temperature"] = [...dayData.temperature, hourlyTemperature]
        dayData["precipitaion"] = [...dayData.precipitaion, hourlyPrecipitation]
        dayData["cloudCover"] = [...dayData.cloudCover, hourlyCloudCover]
        dayData["humidity"] = [...dayData.humidity, hourlyHumidity]
        dayData["windDirection"] = [
          ...dayData.windDirection,
          hourlyWindDirection,
        ]
        dayData["windSpeed"] = [...dayData.windSpeed, hourlyWindSpeed]
        map.set(day, dayData)
      }
    } else {
      map.set(day, {
        temperature: [hourlyTemperature],
        precipitaion: [hourlyPrecipitation],
        humidity: [hourlyHumidity],
        cloudCover: [hourlyCloudCover],
        windDirection: [hourlyWindDirection],
        windSpeed: [hourlyWindSpeed],
      })
    }
    return map
  },
  new Map<string, HourlyDayForecastData>())
  return hourlyDayForecastMap
}
