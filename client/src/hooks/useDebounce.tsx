import { useEffect, useMemo, useRef } from "react"
import debounce from "lodash/debounce"
export const useDebounce = (callback: () => Promise<void>, delay: number) => {
  const ref = useRef<any>()

  useEffect(() => {
    ref.current = callback
  }, [callback])

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.()
    }

    return debounce(func, delay)
  }, [])

  return debouncedCallback
}
