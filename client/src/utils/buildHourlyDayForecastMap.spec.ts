import { ForecastState } from "../features/forecast/forecastSlice"
import { buildHourlyDayForecastMap } from "./buildHourlyDayForecastMap"

const forecastData: ForecastState = {
  latitude: 13,
  longitude: 77.625,
  generationtime_ms: 0.08499622344970703,
  utc_offset_seconds: 19800,
  timezone: "Asia/Kolkata",
  timezone_abbreviation: "IST",
  elevation: 900,
  hourly_units: {
    time: "iso8601",
    temperature_2m: "°C",
    relativehumidity_2m: "%",
    precipitation: "mm",
    cloudcover: "%",
    windspeed_10m: "km/h",
    winddirection_10m: "°",
  },
  hourly: {
    time: [
      "2023-10-25T00:00",
      "2023-10-25T01:00",
      "2023-10-25T02:00",
      "2023-10-25T03:00",
      "2023-10-25T04:00",
      "2023-10-25T05:00",
      "2023-10-25T06:00",
      "2023-10-25T07:00",
      "2023-10-25T08:00",
      "2023-10-25T09:00",
      "2023-10-25T10:00",
      "2023-10-25T11:00",
      "2023-10-25T12:00",
      "2023-10-25T13:00",
      "2023-10-25T14:00",
      "2023-10-25T15:00",
      "2023-10-25T16:00",
      "2023-10-25T17:00",
      "2023-10-25T18:00",
      "2023-10-25T19:00",
      "2023-10-25T20:00",
      "2023-10-25T21:00",
      "2023-10-25T22:00",
      "2023-10-25T23:00",
      "2023-10-26T00:00",
      "2023-10-26T01:00",
      "2023-10-26T02:00",
      "2023-10-26T03:00",
      "2023-10-26T04:00",
      "2023-10-26T05:00",
      "2023-10-26T06:00",
      "2023-10-26T07:00",
      "2023-10-26T08:00",
      "2023-10-26T09:00",
      "2023-10-26T10:00",
      "2023-10-26T11:00",
      "2023-10-26T12:00",
      "2023-10-26T13:00",
      "2023-10-26T14:00",
      "2023-10-26T15:00",
      "2023-10-26T16:00",
      "2023-10-26T17:00",
      "2023-10-26T18:00",
      "2023-10-26T19:00",
      "2023-10-26T20:00",
      "2023-10-26T21:00",
      "2023-10-26T22:00",
      "2023-10-26T23:00",
      "2023-10-27T00:00",
      "2023-10-27T01:00",
      "2023-10-27T02:00",
      "2023-10-27T03:00",
      "2023-10-27T04:00",
      "2023-10-27T05:00",
      "2023-10-27T06:00",
      "2023-10-27T07:00",
      "2023-10-27T08:00",
      "2023-10-27T09:00",
      "2023-10-27T10:00",
      "2023-10-27T11:00",
      "2023-10-27T12:00",
      "2023-10-27T13:00",
      "2023-10-27T14:00",
      "2023-10-27T15:00",
      "2023-10-27T16:00",
      "2023-10-27T17:00",
      "2023-10-27T18:00",
      "2023-10-27T19:00",
      "2023-10-27T20:00",
      "2023-10-27T21:00",
      "2023-10-27T22:00",
      "2023-10-27T23:00",
      "2023-10-28T00:00",
      "2023-10-28T01:00",
      "2023-10-28T02:00",
      "2023-10-28T03:00",
      "2023-10-28T04:00",
      "2023-10-28T05:00",
      "2023-10-28T06:00",
      "2023-10-28T07:00",
      "2023-10-28T08:00",
      "2023-10-28T09:00",
      "2023-10-28T10:00",
      "2023-10-28T11:00",
      "2023-10-28T12:00",
      "2023-10-28T13:00",
      "2023-10-28T14:00",
      "2023-10-28T15:00",
      "2023-10-28T16:00",
      "2023-10-28T17:00",
      "2023-10-28T18:00",
      "2023-10-28T19:00",
      "2023-10-28T20:00",
      "2023-10-28T21:00",
      "2023-10-28T22:00",
      "2023-10-28T23:00",
      "2023-10-29T00:00",
      "2023-10-29T01:00",
      "2023-10-29T02:00",
      "2023-10-29T03:00",
      "2023-10-29T04:00",
      "2023-10-29T05:00",
      "2023-10-29T06:00",
      "2023-10-29T07:00",
      "2023-10-29T08:00",
      "2023-10-29T09:00",
      "2023-10-29T10:00",
      "2023-10-29T11:00",
      "2023-10-29T12:00",
      "2023-10-29T13:00",
      "2023-10-29T14:00",
      "2023-10-29T15:00",
      "2023-10-29T16:00",
      "2023-10-29T17:00",
      "2023-10-29T18:00",
      "2023-10-29T19:00",
      "2023-10-29T20:00",
      "2023-10-29T21:00",
      "2023-10-29T22:00",
      "2023-10-29T23:00",
      "2023-10-30T00:00",
      "2023-10-30T01:00",
      "2023-10-30T02:00",
      "2023-10-30T03:00",
      "2023-10-30T04:00",
      "2023-10-30T05:00",
      "2023-10-30T06:00",
      "2023-10-30T07:00",
      "2023-10-30T08:00",
      "2023-10-30T09:00",
      "2023-10-30T10:00",
      "2023-10-30T11:00",
      "2023-10-30T12:00",
      "2023-10-30T13:00",
      "2023-10-30T14:00",
      "2023-10-30T15:00",
      "2023-10-30T16:00",
      "2023-10-30T17:00",
      "2023-10-30T18:00",
      "2023-10-30T19:00",
      "2023-10-30T20:00",
      "2023-10-30T21:00",
      "2023-10-30T22:00",
      "2023-10-30T23:00",
      "2023-10-31T00:00",
      "2023-10-31T01:00",
      "2023-10-31T02:00",
      "2023-10-31T03:00",
      "2023-10-31T04:00",
      "2023-10-31T05:00",
      "2023-10-31T06:00",
      "2023-10-31T07:00",
      "2023-10-31T08:00",
      "2023-10-31T09:00",
      "2023-10-31T10:00",
      "2023-10-31T11:00",
      "2023-10-31T12:00",
      "2023-10-31T13:00",
      "2023-10-31T14:00",
      "2023-10-31T15:00",
      "2023-10-31T16:00",
      "2023-10-31T17:00",
      "2023-10-31T18:00",
      "2023-10-31T19:00",
      "2023-10-31T20:00",
      "2023-10-31T21:00",
      "2023-10-31T22:00",
      "2023-10-31T23:00",
    ],
    temperature_2m: [
      20.6, 20.3, 19.4, 18.6, 18.2, 18.1, 18.3, 19.4, 21.5, 24.5, 27.1, 28.6,
      29.5, 29.9, 30, 30, 29.6, 28.6, 26.7, 25.4, 23.8, 22.8, 21.6, 20.7, 20.2,
      19.6, 19.1, 18.8, 18.5, 18.2, 18, 19.5, 22.4, 25, 27.2, 28.7, 29.9, 30.7,
      31, 30.9, 30.4, 29.2, 26.9, 25.2, 24.1, 22.9, 22.1, 21.5, 20.6, 20, 19.6,
      19.4, 19.2, 18.8, 18.5, 19.9, 22.6, 25.1, 27.1, 28.6, 29.8, 30.4, 30.6,
      30.4, 29.9, 28.9, 27, 25.6, 24.6, 23.3, 22.5, 21.8, 21.2, 20.7, 20.4,
      20.1, 20, 20.2, 20.7, 21.5, 22.7, 24.6, 26.8, 28.7, 29.8, 30.4, 30.7,
      30.6, 30.2, 29.4, 28.1, 26.6, 25.2, 24, 23, 22.2, 21.7, 21.5, 21.2, 20.8,
      20.3, 20.2, 20.6, 21.2, 22.4, 24.3, 26.8, 28.7, 29.7, 30.2, 30.4, 30.1,
      29.5, 28.7, 27.6, 26.3, 25.1, 24, 23, 22.1, 21.4, 20.8, 20.3, 19.7, 19.3,
      19.3, 19.9, 21, 22.4, 24.2, 26.3, 27.9, 29, 29.6, 29.9, 29.7, 29.2, 28.5,
      27.6, 26.5, 25.5, 24.5, 23.7, 22.8, 22, 21.3, 20.7, 20, 19.5, 19.4, 20.1,
      21.2, 22.6, 24.3, 26.3, 27.9, 29.1, 29.9, 30.3, 30.2, 29.8, 29.1, 28,
      26.7, 25.5, 24.6, 23.9, 23.1,
    ],
    relativehumidity_2m: [
      53, 54, 70, 84, 93, 97, 98, 94, 83, 67, 47, 38, 34, 33, 31, 30, 30, 33,
      40, 44, 45, 43, 44, 49, 51, 61, 70, 74, 77, 81, 83, 80, 70, 60, 48, 40,
      35, 30, 28, 26, 27, 29, 36, 41, 43, 47, 51, 57, 74, 89, 95, 97, 97, 96,
      95, 88, 71, 56, 48, 42, 36, 33, 32, 32, 34, 36, 43, 48, 50, 71, 81, 85,
      91, 93, 95, 96, 97, 95, 91, 85, 78, 68, 56, 47, 42, 39, 37, 36, 37, 40,
      46, 54, 62, 71, 80, 87, 89, 89, 89, 91, 93, 93, 91, 87, 81, 70, 57, 46,
      41, 39, 38, 38, 39, 41, 45, 51, 57, 64, 71, 77, 82, 86, 90, 93, 96, 96,
      93, 87, 80, 70, 59, 50, 45, 42, 41, 40, 41, 42, 45, 49, 53, 58, 63, 68,
      73, 78, 82, 86, 89, 90, 87, 82, 76, 68, 58, 50, 45, 41, 38, 37, 37, 38,
      40, 44, 47, 50, 53, 58,
    ],
    precipitation: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    cloudcover: [
      17, 0, 0, 0, 24, 45, 65, 67, 42, 0, 6, 24, 60, 100, 100, 82, 38, 47, 52,
      33, 19, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 9, 31, 22, 41, 65, 30, 37,
      38, 35, 36, 34, 30, 25, 16, 2, 14, 40, 53, 51, 35, 16, 10, 16, 24, 44, 81,
      84, 68, 80, 90, 70, 58, 46, 46, 51, 36, 37, 31, 42, 52, 63, 63, 62, 62,
      58, 55, 51, 54, 57, 60, 62, 65, 67, 67, 68, 68, 71, 74, 77, 82, 87, 92,
      90, 89, 87, 82, 76, 71, 67, 64, 60, 64, 69, 73, 71, 70, 68, 68, 67, 67,
      74, 81, 88, 89, 91, 92, 83, 74, 65, 58, 50, 43, 59, 74, 90, 90, 90, 90,
      89, 88, 87, 80, 72, 65, 74, 84, 93, 95, 98, 100, 98, 95, 93, 85, 77, 69,
      72, 75, 78, 76, 73, 71, 70, 68, 67, 67, 68, 68, 71, 73, 76, 70, 65, 59,
    ],
    windspeed_10m: [
      5.4, 6.5, 5.8, 5.4, 4.7, 5, 5.2, 7.8, 5.9, 5.8, 9.5, 9.7, 8.7, 8.2, 7.9,
      7.9, 7.4, 5.2, 3.3, 3, 5.1, 5.4, 5, 4.7, 5.2, 5.1, 4.4, 3.2, 3.4, 3.7,
      3.7, 3.4, 4.4, 5.1, 8.3, 9.2, 10.2, 10.2, 9.9, 9.7, 9.4, 7.4, 5.4, 5.9,
      6.1, 5.4, 4.3, 5.8, 6.8, 5.4, 5, 5.1, 4.3, 3.3, 3.2, 3.4, 6.3, 8.1, 10,
      10.2, 10.1, 9.8, 9.4, 8.9, 9, 7.3, 4.9, 4, 6.9, 10.5, 10.7, 9.1, 8.3, 6.8,
      5.8, 5.4, 5.4, 5.8, 6.5, 7.6, 8.3, 9, 9.5, 9.7, 9.3, 8.8, 8, 7.2, 6.6,
      6.5, 8, 10, 11.8, 12.2, 12, 11.1, 10, 8.6, 7.5, 6.4, 5.5, 5.1, 5.2, 5.7,
      6.4, 7.2, 9, 10.2, 10.6, 10.5, 10.1, 9.7, 9, 8.7, 8.4, 7.9, 7.6, 7.9, 8.2,
      8.1, 7, 5.5, 4.2, 3.4, 3.4, 3.4, 4.4, 6, 6.9, 7.5, 8.3, 8.8, 8.6, 8.4,
      7.8, 7.6, 7.1, 6.9, 6.5, 5.9, 6, 6.1, 6.6, 6.6, 6, 5.4, 4.8, 4.5, 3.9, 4,
      5, 6.6, 7.2, 6.3, 5.2, 5.6, 6.4, 6.9, 6.9, 6.4, 5.4, 5, 5.5, 6.2, 6.7,
      6.4, 5.9, 6.1,
    ],
    winddirection_10m: [
      82, 84, 86, 82, 67, 60, 65, 77, 79, 83, 61, 48, 45, 41, 43, 43, 47, 56,
      77, 76, 39, 42, 60, 81, 78, 86, 99, 90, 72, 61, 61, 58, 81, 98, 72, 51,
      45, 45, 46, 48, 50, 51, 48, 47, 50, 70, 90, 86, 93, 94, 90, 98, 95, 77,
      63, 58, 77, 77, 69, 58, 55, 54, 58, 63, 74, 79, 73, 63, 96, 106, 102, 97,
      95, 90, 86, 86, 90, 94, 93, 95, 92, 85, 79, 75, 77, 81, 85, 84, 81, 84,
      95, 105, 110, 109, 106, 103, 105, 105, 107, 106, 101, 98, 102, 108, 106,
      96, 85, 80, 80, 82, 84, 88, 92, 97, 100, 106, 109, 114, 119, 122, 125,
      122, 121, 122, 122, 122, 125, 123, 118, 107, 90, 81, 75, 70, 68, 71, 75,
      84, 93, 104, 115, 118, 119, 119, 115, 110, 103, 104, 112, 117, 120, 119,
      117, 103, 74, 50, 43, 39, 39, 43, 53, 60, 58, 54, 54, 63, 76, 90,
    ],
  },
  daily_units: {
    time: "iso8601",
    weathercode: "wmo code",
    temperature_2m_max: "°C",
    temperature_2m_min: "°C",
  },
  daily: {
    time: [
      "2023-10-25",
      "2023-10-26",
      "2023-10-27",
      "2023-10-28",
      "2023-10-29",
      "2023-10-30",
      "2023-10-31",
    ],
    weathercode: [3, 2, 3, 3, 3, 3, 3],
    temperature_2m_max: [30, 31, 30.6, 30.7, 30.4, 29.9, 30.3],
    temperature_2m_min: [18.1, 18, 18.5, 20, 20.2, 19.3, 19.4],
  },
  status: "loaded",
}

const expectedMap = new Map([
  [
    "25-10-2023",
    {
      temperature: [
        20.6, 20.3, 19.4, 18.6, 18.2, 18.1, 18.3, 19.4, 21.5, 24.5, 27.1, 28.6,
        29.5, 29.9, 30, 30, 29.6, 28.6, 26.7, 25.4, 23.8, 22.8, 21.6, 20.7,
      ],
      precipitaion: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      humidity: [
        53, 54, 70, 84, 93, 97, 98, 94, 83, 67, 47, 38, 34, 33, 31, 30, 30, 33,
        40, 44, 45, 43, 44, 49,
      ],
      cloudCover: [
        17, 0, 0, 0, 24, 45, 65, 67, 42, 0, 6, 24, 60, 100, 100, 82, 38, 47, 52,
        33, 19, 0, 0, 0,
      ],
      windDirection: [
        82, 84, 86, 82, 67, 60, 65, 77, 79, 83, 61, 48, 45, 41, 43, 43, 47, 56,
        77, 76, 39, 42, 60, 81,
      ],
      windSpeed: [
        5.4, 6.5, 5.8, 5.4, 4.7, 5, 5.2, 7.8, 5.9, 5.8, 9.5, 9.7, 8.7, 8.2, 7.9,
        7.9, 7.4, 5.2, 3.3, 3, 5.1, 5.4, 5, 4.7,
      ],
    },
  ],
  [
    "26-10-2023",
    {
      temperature: [
        20.2, 19.6, 19.1, 18.8, 18.5, 18.2, 18, 19.5, 22.4, 25, 27.2, 28.7,
        29.9, 30.7, 31, 30.9, 30.4, 29.2, 26.9, 25.2, 24.1, 22.9, 22.1, 21.5,
      ],
      precipitaion: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      humidity: [
        51, 61, 70, 74, 77, 81, 83, 80, 70, 60, 48, 40, 35, 30, 28, 26, 27, 29,
        36, 41, 43, 47, 51, 57,
      ],
      cloudCover: [
        0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 9, 31, 22, 41, 65, 30, 37, 38, 35, 36, 34,
        30, 25, 16,
      ],
      windDirection: [
        78, 86, 99, 90, 72, 61, 61, 58, 81, 98, 72, 51, 45, 45, 46, 48, 50, 51,
        48, 47, 50, 70, 90, 86,
      ],
      windSpeed: [
        5.2, 5.1, 4.4, 3.2, 3.4, 3.7, 3.7, 3.4, 4.4, 5.1, 8.3, 9.2, 10.2, 10.2,
        9.9, 9.7, 9.4, 7.4, 5.4, 5.9, 6.1, 5.4, 4.3, 5.8,
      ],
    },
  ],
  [
    "27-10-2023",
    {
      temperature: [
        20.6, 20, 19.6, 19.4, 19.2, 18.8, 18.5, 19.9, 22.6, 25.1, 27.1, 28.6,
        29.8, 30.4, 30.6, 30.4, 29.9, 28.9, 27, 25.6, 24.6, 23.3, 22.5, 21.8,
      ],
      precipitaion: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      humidity: [
        74, 89, 95, 97, 97, 96, 95, 88, 71, 56, 48, 42, 36, 33, 32, 32, 34, 36,
        43, 48, 50, 71, 81, 85,
      ],
      cloudCover: [
        2, 14, 40, 53, 51, 35, 16, 10, 16, 24, 44, 81, 84, 68, 80, 90, 70, 58,
        46, 46, 51, 36, 37, 31,
      ],
      windDirection: [
        93, 94, 90, 98, 95, 77, 63, 58, 77, 77, 69, 58, 55, 54, 58, 63, 74, 79,
        73, 63, 96, 106, 102, 97,
      ],
      windSpeed: [
        6.8, 5.4, 5, 5.1, 4.3, 3.3, 3.2, 3.4, 6.3, 8.1, 10, 10.2, 10.1, 9.8,
        9.4, 8.9, 9, 7.3, 4.9, 4, 6.9, 10.5, 10.7, 9.1,
      ],
    },
  ],
  [
    "28-10-2023",
    {
      temperature: [
        21.2, 20.7, 20.4, 20.1, 20, 20.2, 20.7, 21.5, 22.7, 24.6, 26.8, 28.7,
        29.8, 30.4, 30.7, 30.6, 30.2, 29.4, 28.1, 26.6, 25.2, 24, 23, 22.2,
      ],
      precipitaion: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      humidity: [
        91, 93, 95, 96, 97, 95, 91, 85, 78, 68, 56, 47, 42, 39, 37, 36, 37, 40,
        46, 54, 62, 71, 80, 87,
      ],
      cloudCover: [
        42, 52, 63, 63, 62, 62, 58, 55, 51, 54, 57, 60, 62, 65, 67, 67, 68, 68,
        71, 74, 77, 82, 87, 92,
      ],
      windDirection: [
        95, 90, 86, 86, 90, 94, 93, 95, 92, 85, 79, 75, 77, 81, 85, 84, 81, 84,
        95, 105, 110, 109, 106, 103,
      ],
      windSpeed: [
        8.3, 6.8, 5.8, 5.4, 5.4, 5.8, 6.5, 7.6, 8.3, 9, 9.5, 9.7, 9.3, 8.8, 8,
        7.2, 6.6, 6.5, 8, 10, 11.8, 12.2, 12, 11.1,
      ],
    },
  ],
  [
    "29-10-2023",
    {
      temperature: [
        21.7, 21.5, 21.2, 20.8, 20.3, 20.2, 20.6, 21.2, 22.4, 24.3, 26.8, 28.7,
        29.7, 30.2, 30.4, 30.1, 29.5, 28.7, 27.6, 26.3, 25.1, 24, 23, 22.1,
      ],
      precipitaion: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      humidity: [
        89, 89, 89, 91, 93, 93, 91, 87, 81, 70, 57, 46, 41, 39, 38, 38, 39, 41,
        45, 51, 57, 64, 71, 77,
      ],
      cloudCover: [
        90, 89, 87, 82, 76, 71, 67, 64, 60, 64, 69, 73, 71, 70, 68, 68, 67, 67,
        74, 81, 88, 89, 91, 92,
      ],
      windDirection: [
        105, 105, 107, 106, 101, 98, 102, 108, 106, 96, 85, 80, 80, 82, 84, 88,
        92, 97, 100, 106, 109, 114, 119, 122,
      ],
      windSpeed: [
        10, 8.6, 7.5, 6.4, 5.5, 5.1, 5.2, 5.7, 6.4, 7.2, 9, 10.2, 10.6, 10.5,
        10.1, 9.7, 9, 8.7, 8.4, 7.9, 7.6, 7.9, 8.2, 8.1,
      ],
    },
  ],
  [
    "30-10-2023",
    {
      temperature: [
        21.4, 20.8, 20.3, 19.7, 19.3, 19.3, 19.9, 21, 22.4, 24.2, 26.3, 27.9,
        29, 29.6, 29.9, 29.7, 29.2, 28.5, 27.6, 26.5, 25.5, 24.5, 23.7, 22.8,
      ],
      precipitaion: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      humidity: [
        82, 86, 90, 93, 96, 96, 93, 87, 80, 70, 59, 50, 45, 42, 41, 40, 41, 42,
        45, 49, 53, 58, 63, 68,
      ],
      cloudCover: [
        83, 74, 65, 58, 50, 43, 59, 74, 90, 90, 90, 90, 89, 88, 87, 80, 72, 65,
        74, 84, 93, 95, 98, 100,
      ],
      windDirection: [
        125, 122, 121, 122, 122, 122, 125, 123, 118, 107, 90, 81, 75, 70, 68,
        71, 75, 84, 93, 104, 115, 118, 119, 119,
      ],
      windSpeed: [
        7, 5.5, 4.2, 3.4, 3.4, 3.4, 4.4, 6, 6.9, 7.5, 8.3, 8.8, 8.6, 8.4, 7.8,
        7.6, 7.1, 6.9, 6.5, 5.9, 6, 6.1, 6.6, 6.6,
      ],
    },
  ],
  [
    "31-10-2023",
    {
      temperature: [
        22, 21.3, 20.7, 20, 19.5, 19.4, 20.1, 21.2, 22.6, 24.3, 26.3, 27.9,
        29.1, 29.9, 30.3, 30.2, 29.8, 29.1, 28, 26.7, 25.5, 24.6, 23.9, 23.1,
      ],
      precipitaion: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      humidity: [
        73, 78, 82, 86, 89, 90, 87, 82, 76, 68, 58, 50, 45, 41, 38, 37, 37, 38,
        40, 44, 47, 50, 53, 58,
      ],
      cloudCover: [
        98, 95, 93, 85, 77, 69, 72, 75, 78, 76, 73, 71, 70, 68, 67, 67, 68, 68,
        71, 73, 76, 70, 65, 59,
      ],
      windDirection: [
        115, 110, 103, 104, 112, 117, 120, 119, 117, 103, 74, 50, 43, 39, 39,
        43, 53, 60, 58, 54, 54, 63, 76, 90,
      ],
      windSpeed: [
        6, 5.4, 4.8, 4.5, 3.9, 4, 5, 6.6, 7.2, 6.3, 5.2, 5.6, 6.4, 6.9, 6.9,
        6.4, 5.4, 5, 5.5, 6.2, 6.7, 6.4, 5.9, 6.1,
      ],
    },
  ],
])

test("tests buildHourlyDayForecastMap Utility", () => {
  const actualMap = buildHourlyDayForecastMap(forecastData)
  expect(JSON.stringify(actualMap)).toEqual(JSON.stringify(expectedMap))
})
