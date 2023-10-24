import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend,
)

export const options: ChartJS["options"] = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  //@ts-expect-error Due to conflicting types for chartjs and react-chartjs-2
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Wind Direction and Wind Speed Data wrt Time",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Time",
      },
    },
    y: {
      title: {
        display: true,
        text: "Angle (in °)",
      },
      ticks: {
        callback: (value) => `${value} °`,
      },
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      title: {
        display: true,
        text: "Wind Speed (in KM/h)",
      },
      ticks: {
        callback: (value) => `${value} KM/h`,
      },
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
  maintainAspectRatio: false,
}

dayjs.extend(customParseFormat)

export function WindSpeedDirection({
  data,
}: {
  data: {
    windSpeed: HourlyDayForecastData["windSpeed"] | undefined
    windDirection: HourlyDayForecastData["windDirection"] | undefined
  }
}) {
  // take values in interval of 3 hours
  const labels = data.windDirection
    ?.map((_, index) => {
      return dayjs(index.toString(), "H").format("h a")
    })
    .filter((_, idx) => idx % 3 === 0)

  const windSpeedValues = data.windSpeed?.filter((_, idx) => idx % 3 === 0)
  const windDirectionValues = data.windDirection?.filter(
    (_, idx) => idx % 3 === 0,
  )
  const tempData = {
    labels,
    datasets: [
      {
        label: "Wind Direction",
        data: windDirectionValues,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Wind Speed",
        data: windSpeedValues,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  }

  return (
    <Line
      aria-label="Multi Axes Chart for Wind Speed and Wind Direction wrt Time"
      role="multi-axes-chart"
      className="h-80"
      // @ts-expect-error Due to conflicting types for chartjs and react-chartjs-2
      options={options}
      data={tempData}
    />
  )
}
