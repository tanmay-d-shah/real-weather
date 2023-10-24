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
        text: "Value (in %)",
      },
      ticks: {
        callback: (value) => `${value} %`,
      },
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Humidity and Cloud Cover Data wrt Time",
    },
  },
}

dayjs.extend(customParseFormat)

export function HumidityCloudCover({
  data,
}: {
  data: {
    cloudCover: HourlyDayForecastData["cloudCover"] | undefined
    humidity: HourlyDayForecastData["humidity"] | undefined
  }
}) {
  const labels = data.cloudCover
    ?.map((_, index) => {
      return dayjs(index.toString(), "H").format("h a")
    })
    .filter((_, idx) => idx % 3 === 0)

  // take values in interval of 3 hours
  const humidityValues = data.humidity?.filter((_, idx) => idx % 3 === 0)
  const cloudCoverValues = data.cloudCover?.filter((_, idx) => idx % 3 === 0)

  const tempData = {
    labels,
    datasets: [
      {
        label: "Humidity",
        data: humidityValues,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Cloud Cover",
        data: cloudCoverValues,
        borderColor: "rgb(51, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  return (
    <Line
      aria-label="Line Chart for Humidity and Cloud Cover wrt Time"
      role="line-chart"
      className="h-80"
      // @ts-expect-error Due to conflicting types for chartjs and react-chartjs-2
      options={options}
      data={tempData}
      t
    />
  )
}
