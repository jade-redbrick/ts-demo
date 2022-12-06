import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ChartData } from "types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  barThickness: 30,
  layout: {
    padding: {
      top: 20,
      bottom: 130,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        color: "#ffffff",
      },
      scaleLabel: {
        display: true,
      },
      tick: {
        display: true,
        stepSize: 2,
        color: "#2B2B2B",
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
        padding: 5,
        font: {
          weight: 700,
          size: 12,
        },
      },
    },
    y: {
      display: false,
      grid: {
        color: "#ffffff",
      },
      scaleLabel: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#A2A2A2",
      anchor: "end" as const,
      clamp: false,
      align: "top" as const,
      font: {
        weight: 500,
        size: 16,
      },
      formatter: (value: number) => value.toLocaleString(),
    },
  },
};

export default function Chart({ chartData }: { chartData: ChartData }) {
  return <Bar options={options} plugins={[ChartDataLabels]} data={chartData} />;
}
