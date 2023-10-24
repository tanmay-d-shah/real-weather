import React from "react"
import { render, screen } from "@testing-library/react"
import { HumidityCloudCover } from "./HumidityCloudCover"
import { Temperature } from "./Temperature"
import { WindSpeedDirection } from "./WindSpeedDirection"

const dailyWeatherMapData = {
  temperature: [
    20.6, 20.3, 19.4, 18.6, 18.2, 18.1, 18.3, 19.4, 21.5, 24.5, 27.1, 28.6,
    29.5, 29.9, 30, 30, 29.6, 28.6, 26.7, 25.4, 23.8, 22.8, 21.6, 20.7,
  ],
  precipitaion: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  humidity: [
    53, 54, 70, 84, 93, 97, 98, 94, 83, 67, 47, 38, 34, 33, 31, 30, 30, 33, 40,
    44, 45, 43, 44, 49,
  ],
  cloudCover: [
    17, 0, 0, 0, 24, 45, 65, 67, 42, 0, 6, 24, 60, 100, 100, 82, 38, 47, 52, 33,
    19, 0, 0, 0,
  ],
  windDirection: [
    82, 84, 86, 82, 67, 60, 65, 77, 79, 83, 61, 48, 45, 41, 43, 43, 47, 56, 77,
    76, 39, 42, 60, 81,
  ],
  windSpeed: [
    5.4, 6.5, 5.8, 5.4, 4.7, 5, 5.2, 7.8, 5.9, 5.8, 9.5, 9.7, 8.7, 8.2, 7.9,
    7.9, 7.4, 5.2, 3.3, 3, 5.1, 5.4, 5, 4.7,
  ],
}

test("renders Humidity Cloud Cover Chart", () => {
  render(
    <HumidityCloudCover
      data={{
        humidity: dailyWeatherMapData.humidity,
        cloudCover: dailyWeatherMapData.cloudCover,
      }}
    />,
  )
  const chart = screen.getByRole("line-chart")
  expect(chart).toBeInTheDocument()
})

test("renders Temperature Chart", () => {
  render(<Temperature data={dailyWeatherMapData.temperature} />)
  const temperatureChart = screen.getByRole("area-chart")
  expect(temperatureChart).toBeInTheDocument()
})

test("renders Wind Speed and Wind Direction Chart", () => {
  render(
    <WindSpeedDirection
      data={{
        windSpeed: dailyWeatherMapData.windSpeed,
        windDirection: dailyWeatherMapData.windDirection,
      }}
    />,
  )
  const temperatureChart = screen.getByRole("multi-axes-chart")
  expect(temperatureChart).toBeInTheDocument()
})
