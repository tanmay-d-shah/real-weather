import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

import customParseFormat from "dayjs/plugin/customParseFormat"
import dayjs from "dayjs"
import { HourlyDayForecastData } from "../../utils/buildHourlyDayForecastMap"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
)

export const options: ChartJS["options"] = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: "Time",
      },
      grid: {
        display: false,
      },
    },
    y: {
      title: {
        display: true,
        text: "Temperature (in °C)",
      },
      ticks: {
        callback: (value) => `${value} °C`,
      },
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Temperature Data wrt Time",
    },
  },
}

dayjs.extend(customParseFormat)

export function Temperature({
  data,
}: {
  data: HourlyDayForecastData["temperature"] | undefined
}) {
  const labels = data
    ?.map((_, index) => {
      return dayjs(index.toString(), "H").format("h a")
    })
    .filter((_, idx) => idx % 3 === 0)

  // take values in interval of 3 hours
  const tempValues = data?.filter((_, idx) => idx % 3 === 0)
  const tempData = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Temperature",
        data: tempValues,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
    ],
  }

  return (
    <Line
      aria-label="Area Chart for Temperature wrt Time"
      role="area-chart"
      className="h-80"
      // @ts-expect-error Due to conflicting types for chartjs and react-chartjs-2
      options={options}
      data={tempData}
    />
  )
}
