import { FallbackProps } from "react-error-boundary"

export default function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={() => resetErrorBoundary()}>Try Again</button>
    </div>
  )
}
