import useWebSocket from "react-use-websocket"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { FaTemperatureHigh, FaWind, FaCloudRain } from "react-icons/fa"
import { BsDropletHalf } from "react-icons/bs"
import {
  CurrentWeatherState,
  selectCurrentWeather,
  updateCurrentWeather,
} from "./currentWeatherSlice"
import { selectLocation } from "../location/locationSlice"
import { REMOTE_SERVER_URL } from "../../constants"

export default function CurrentWeather() {
  const dispatch = useAppDispatch()
  const currentWeatherData = useAppSelector(selectCurrentWeather)
  const selectedLocation = useAppSelector(selectLocation)
  const isLocationLoaded = selectedLocation.status === "loaded"
  const isCurrentWeatherDataLoaded = currentWeatherData.status === "loaded"

  useWebSocket(
    `${REMOTE_SERVER_URL}/current-weather?lat=${selectedLocation.latitude}&long=${selectedLocation.longitude}`,
    {
      onOpen: () => console.log("WebSocket connection opened."),
      onClose: () => console.log("WebSocket connection closed."),
      shouldReconnect: (closeEvent) => true,
      onMessage: (event: WebSocketEventMap["message"]) =>
        processMessages(event),
    },
  )
  const processMessages = (event: { data: string }) => {
    const response = JSON.parse(event.data) as CurrentWeatherState
    if (isLocationLoaded) {
      dispatch(updateCurrentWeather({ ...response, status: "idle" }))
    }
  }
  return (
    <>
      {!isLocationLoaded || !isCurrentWeatherDataLoaded ? (
        <></>
      ) : (
        <div className="flex flex-col mx-auto">
          <div className="flex-1 flex justify-center">
            {!!selectedLocation.name
              ? `${selectedLocation.name}'s Current Weather`
              : null}
          </div>
          <div className="flex-1 flex justify-center px-4 py-4 gap-4">
            <div className="flex flex-col h-24 w-24 items-center gap-2">
              <span className="flex-1" aria-label="Temperature">
                <FaTemperatureHigh className="h-12 w-12" />
              </span>
              <span className="flex-1">
                {currentWeatherData.current.temperature_2m +
                  " " +
                  currentWeatherData.current_units.temperature_2m}
              </span>
            </div>

            <div className="flex flex-col h-24 w-24 items-center gap-2">
              <span className="flex-1" aria-label="Wind Speed">
                <FaWind className="h-12 w-12" />
              </span>
              <span className="flex-1">
                {currentWeatherData.current.windspeed_10m +
                  " " +
                  currentWeatherData.current_units.windspeed_10m}
              </span>
            </div>

            <div className="flex flex-col h-24 w-24 items-center gap-2">
              <span className="flex-1" aria-label="Precipitation">
                <FaCloudRain className="h-12 w-12" />
              </span>
              <span className="flex-1">
                {currentWeatherData.current.precipitation +
                  " " +
                  currentWeatherData.current_units.precipitation}
              </span>
            </div>

            <div className="flex flex-col h-24 w-24 items-center gap-2">
              <span className="flex-1" aria-label="Humidity">
                <BsDropletHalf className="h-12 w-12" />
              </span>
              <span className="flex-1">
                {currentWeatherData.current.relativehumidity_2m +
                  " " +
                  currentWeatherData.current_units.relativehumidity_2m}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
