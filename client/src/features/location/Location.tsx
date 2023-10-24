import { Fragment, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/20/solid"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  GeoCodedLocation,
  SearchLocationResults,
  selectLocation,
  setLocation,
} from "./locationSlice"
import { fetchSearchLocationResults } from "./searchLocationsAPI"

export default function Location() {
  const [query, setQuery] = useState("")
  const location = useAppSelector(selectLocation)
  const dispatch = useAppDispatch()

  function setSelectedLocation(location: GeoCodedLocation) {
    setQuery(query)
    dispatch(setLocation({ ...location, status: "idle" }))
  }

  async function autocomplete(query: string) {
    setQuery(query)
    const locationSearchResults = await fetchSearchLocationResults(query)
    if (locationSearchResults.results) {
      const nameSet = new Set<string>()
      const uniqueSearchResults = locationSearchResults.results.map(
        (result) => {
          if (!nameSet.has(result.name)) {
            nameSet.add(result.name)
            return result
          }
          return null
        },
      )

      locationSearchResults.results = uniqueSearchResults.filter(
        Boolean,
      ) as GeoCodedLocation[]
      setSearchResults(locationSearchResults)
    }
  }

  const [searchResults, setSearchResults] = useState<SearchLocationResults>({
    results: [],
    generationtime_ms: 0,
  })

  return (
    <div className="w-6/12 mx-auto">
      <Combobox value={location} onChange={setSelectedLocation}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              placeholder="Search Locations"
              className="w-full h-12 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none focus:ring-0"
              displayValue={(location: GeoCodedLocation) => location.name}
              onChange={(event) => autocomplete(event.target.value)}
              value={query}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {searchResults.results.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                searchResults.results.map((locationSuggestion) => (
                  <Combobox.Option
                    key={locationSuggestion.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={locationSuggestion}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {locationSuggestion.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
