import "./App.css"
import { useEffect, useState } from "react"
import Location from "./features/location/Location"
import { useAppDispatch } from "./app/hooks"
import {
  GeoCoordinates,
  setLocationCoords,
  setLocationError,
} from "./features/location/locationSlice"
import { WeatherDetails } from "./components/WeatherDetails"
import Footer from "./components/Footer"
import { ErrorBoundary } from "react-error-boundary"
import Fallback from "./components/Fallback"

function App() {
  const [isPageVisible, setIsPageVisible] = useState(true)
  const dispatch = useAppDispatch()

  // Page Visibility detection
  useEffect(() => {
    // Set the name of the hidden property and the change event for visibility
    let hidden: string = ""
    let visibilityChange: string = ""

    if (typeof document.hidden !== "undefined") {
      // Opera 12.10 and Firefox 18 and later support
      hidden = "hidden"
      visibilityChange = "visibilitychange"
    } else {
      // @ts-ignore
      if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden"
        visibilityChange = "msvisibilitychange"
      } else {
        // @ts-ignore
        if (typeof document.webkitHidden !== "undefined") {
          hidden = "webkitHidden"
          visibilityChange = "webkitvisibilitychange"
        }
      }
    }

    const handleVisibilityChange = () => {
      const isHidden = document["hidden"]
      if (isHidden) {
        document.title = "Real Weather Paused"
        setIsPageVisible(false)
      } else {
        document.title = "Real Weather"
        setIsPageVisible(true)
      }
    }

    // Warn if the browser doesn't support addEventListener or the Page Visibility API
    if (typeof document.addEventListener === "undefined" || hidden === "") {
      console.log(
        "This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.",
      )
    } else {
      // Handle page visibility change
      document.addEventListener(visibilityChange, handleVisibilityChange, false)
    }
  }, [])

  // Detect Location Coordinates
  useEffect(() => {
    function success(position: GeolocationPosition) {
      const coordinates: GeoCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }
      dispatch(setLocationCoords(coordinates))
    }
    function error(error: GeolocationPositionError) {
      dispatch(setLocationError())
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }, [dispatch])

  return (
    <>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        {isPageVisible ? (
          <>
            <div className="h-[100vh]   p-4 space-y-1 relative bg-slate-200 dark:bg-gray-900 dark:text-gray-50 overflow-y-scroll hide-scroll-bar">
              <div className="md:h-[10%] bg-opacity-30 flex items-center sticky top-0 z-20">
                <Location />
              </div>
              <div className="w-full flex flex-col h-auto md:h-[85%] space-y-2 relative ">
                <WeatherDetails />
              </div>

              <div className="md:h-[5%] md:absolute right-5 mt-2 bottom-0 py-2">
                <Footer />
              </div>
            </div>
          </>
        ) : (
          "HIDDEN PAGE"
        )}
      </ErrorBoundary>
    </>
  )
}

export default App
