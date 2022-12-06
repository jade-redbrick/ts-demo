import { ChartData } from "types";
import Chart from "./Chart";
import styles from "./index.module.scss";

function DoughnutChart({ chartData }: { chartData: ChartData }) {
  return (
    <div className={styles.doughnut_chart}>
      <h3 className={styles.title}>Revenue Distribution</h3>
      <div className={styles.chart}>
        <Chart chartData={chartData} />
      </div>
    </div>
  );
}

export default DoughnutChart;
