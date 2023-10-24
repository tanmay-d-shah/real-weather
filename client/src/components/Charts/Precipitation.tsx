import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

import customParseFormat from "dayjs/plugin/customParseFormat"
import dayjs from "dayjs"
import { HourlyDayForecastData } from "../../utils/buildHourlyDayForecastMap"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Precipitation",
    },
  },
}

dayjs.extend(customParseFormat)

export function Precipitation({
  data,
}: {
  data: HourlyDayForecastData["precipitaion"] | undefined
}) {
  const labels = data
    ?.map((_, index) => {
      return dayjs(index.toString(), "H").format("h a")
    })
    .filter((_, idx) => idx % 3 === 0)

  const tempValues = data
    ?.filter((_, idx) => idx % 3 === 0)
    .map((val, idx) => val + idx)

  const tempData = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Precipitation",
        data: tempValues,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
    ],
  }
  return <Bar options={options} data={tempData} />
}
