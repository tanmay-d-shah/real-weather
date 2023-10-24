import { Forecast } from "../features/forecast/Forecast"
import TodayWeather from "../features/currentWeather/CurrentWeather"

export function WeatherDetails() {
  return (
    <>
      <div className="top flex w-full flex-col md:flex-row md:h-1/6  md:space-x-4 ">
        <TodayWeather />
      </div>

      <div className="bottom flex w-full flex-col md:flex-row md:h-5/6  md:space-x-4 ">
        <Forecast />
      </div>
    </>
  )
}
