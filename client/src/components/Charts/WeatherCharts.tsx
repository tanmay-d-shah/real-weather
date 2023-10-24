import { HourlyDayForecastData } from "../../utils/buildHourlyDayForecastMap"
import { HumidityCloudCover } from "./HumidityCloudCover"
import { Temperature } from "./Temperature"
import { WindSpeedDirection } from "./WindSpeedDirection"

export default function WeatherCharts({
  chartName,
  hourlyDayForecastData,
}: {
  chartName: string
  hourlyDayForecastData: HourlyDayForecastData
}) {
  switch (chartName) {
    case "Temperature":
      return <Temperature data={hourlyDayForecastData.temperature} />

    case "Wind Speed & Direction":
      return (
        <WindSpeedDirection
          data={{
            windDirection: hourlyDayForecastData.windDirection,
            windSpeed: hourlyDayForecastData.windSpeed,
          }}
        />
      )

    case "Humidity & Cloud Cover":
      return (
        <HumidityCloudCover
          data={{
            cloudCover: hourlyDayForecastData.cloudCover,
            humidity: hourlyDayForecastData.humidity,
          }}
        />
      )
  }
}
