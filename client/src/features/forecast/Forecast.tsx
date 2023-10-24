import { useState } from "react"
import { Tab } from "@headlessui/react"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { weatherCodeIcons } from "../../assets/weatherCodeIcons"
import useWebSocket from "react-use-websocket"
import {
  ForecastState,
  selectForecast,
  updateNewForecastData,
} from "./forecastSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import WeatherCharts from "../../components/Charts/WeatherCharts"
import { buildHourlyDayForecastMap } from "../../utils/buildHourlyDayForecastMap"
import { selectLocation } from "../location/locationSlice"
import { Bars } from "react-loader-spinner"

dayjs.extend(customParseFormat)

export function Forecast() {
  const dispatch = useAppDispatch()
  const forecastData = useAppSelector(selectForecast)
  const selectedLocation = useAppSelector(selectLocation)
  const isLocationLoaded = selectedLocation.status === "loaded"
  const isForecastDataLoaded = forecastData.status === "loaded"

  useWebSocket(
    `wss://weather-socket.onrender.com/forecast?lat=${selectedLocation.latitude}&long=${selectedLocation.longitude}`,
    {
      onOpen: () => console.log("WebSocket connection opened."),
      onClose: () => console.log("WebSocket connection closed."),
      shouldReconnect: (closeEvent) => true,
      onMessage: (event: WebSocketEventMap["message"]) =>
        processMessages(event),
    },
  )

  const processMessages = (event: { data: string }) => {
    const response = JSON.parse(event.data) as ForecastState
    if (isLocationLoaded) {
      dispatch(updateNewForecastData({ ...response, status: "idle" }))
    }
  }

  const averageDayWeatherData = {
    daily: forecastData.daily,
    daily_units: forecastData.daily_units,
  }

  function getWeatherCodeIcon(code: number) {
    //@ts-expect-error
    return weatherCodeIcons[code.toString()].day.image
  }

  const hourlyDayForecastMap = buildHourlyDayForecastMap(forecastData)
  const dates = Array.from(hourlyDayForecastMap.keys())
  const [selectedDate, setSelectedDate] = useState(dayjs().format("DD-MM-YYYY"))

  const dayData = hourlyDayForecastMap.get(selectedDate) ?? null

  const tabs = [
    "Temperature",
    "Wind Speed & Direction",
    "Humidity & Cloud Cover",
  ]

  return (
    <>
      <div className="container mx-auto">
        {!isLocationLoaded || !isForecastDataLoaded ? (
          <>
            <div className="w-ful h-full px-2 mt-3 sm:px-0 flex justify-center">
              {selectedLocation.status === "error" ? (
                <p>
                  Error in fetching location. Check your location permissions
                  and refresh
                </p>
              ) : (
                <Bars
                  height="80"
                  width="80"
                  color="rgb(53, 162, 235)"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              )}
            </div>
          </>
        ) : (
          <div className="w-ful h-full px-2 mt-3 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex max-w-md space-x-1 rounded-xl bg-blue-900/20 p-1">
                {tabs.map((tab) => {
                  return (
                    <Tab
                      key={tab}
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                          selected
                            ? "bg-white shadow"
                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                        )
                      }
                    >
                      {tab}
                    </Tab>
                  )
                })}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {dayData &&
                  tabs.map((tab) => {
                    return (
                      <Tab.Panel
                        key={tab}
                        className={classNames(
                          "rounded-x p-3",
                          "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        )}
                      >
                        <WeatherCharts
                          chartName={tab}
                          hourlyDayForecastData={dayData}
                        />
                      </Tab.Panel>
                    )
                  })}
              </Tab.Panels>
            </Tab.Group>

            <div className="flex mx-auto max-w-2xl mt-4 px-1 py-1 gap-2 overflow-x-scroll rounded-md bg-blue-900/20">
              {dates.map((date, index) => {
                return (
                  <div
                    id={date}
                    key={date}
                    role="button"
                    onClick={() => {
                      setSelectedDate(date)
                    }}
                    className={classNames(
                      "shrink-0 flex mx-auto text-blue-700 flex-col px-2 py-2 content-center justify-center rounded-md h-32",
                      date === selectedDate ? "bg-white" : "",
                    )}
                  >
                    <span className="mx-auto">
                      {dayjs(date, "DD-MM-YYYY").format("dddd")}
                    </span>
                    <img
                      alt="weather-icon"
                      className="mx-auto w-14 h-14"
                      src={getWeatherCodeIcon(
                        averageDayWeatherData.daily.weathercode[index],
                      )}
                    ></img>
                    <span className="text-sm flex flex-col mx-auto">
                      <span>
                        Min:{" "}
                        {averageDayWeatherData.daily.temperature_2m_min[index]}
                      </span>
                      <span>
                        Max:{" "}
                        {averageDayWeatherData.daily.temperature_2m_max[index]}
                      </span>
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
