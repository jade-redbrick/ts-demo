import { ChartData } from "types";
import Chart from "./Chart";
import styles from "./index.module.scss";

function BarChart({ chartData }: { chartData: ChartData }) {
  return (
    <div className={styles.bar_chart}>
      <h3 className={styles.title}>Top 12 UGC profit</h3>
      <div className={styles.chart}>
        <Chart chartData={chartData} />
      </div>
    </div>
  );
}

export default BarChart;
