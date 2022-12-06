import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import datalabelsPlugin, { Context } from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import { ChartData } from "types";

ChartJS.register(ArcElement, Tooltip, Legend, [datalabelsPlugin]);

export const options = {
  responsive: true,
  barThickness: 20,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#ffffff",
      anchor: "center" as const,
      clamp: false,
      align: "center" as const,
      font: {
        weight: 500,
        size: 12,
      },
      formatter: (value: number, ctx: Context): string => {
        let sum: number = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map((data) => {
          sum += Number(data);
        });
        let percentage = Number(((value * 100) / sum).toFixed(1));
        return percentage >= 5 ? percentage + "%" : "";
      },
    },
  },
};

export default function Chart({ chartData }: { chartData: ChartData }) {
  return <Doughnut options={options} data={chartData} />;
}
