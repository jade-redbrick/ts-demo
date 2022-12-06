import { ChartData, GstarChallengeWorld } from "types";
import Top3 from "./Top3";
import TotalSection from "./TotalSection";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import styles from "./index.module.scss";

export default function View({
  gstarWorlds,
  chartData,
  totalViewCount,
  totalRevenue,
  cpv,
}: {
  gstarWorlds: GstarChallengeWorld[] | undefined;
  chartData: ChartData;
  totalViewCount: number;
  totalRevenue: number;
  cpv: number;
}) {
  return (
    <div className={styles.dash_board}>
      <h3 className={styles.board_title}>REDBRICK Advertisement Profit</h3>

      <p className={styles.lately_update}>
        마지막 업데이트
        <br />
        2022년 11월 29일 15:40
      </p>

      <div className={styles.board}>
        <div className={styles.flex_column}>
          <Top3 gstarWorlds={gstarWorlds} cpv={cpv} />
          <BarChart chartData={chartData} />
        </div>
        <div className={styles.flex_column}>
          <TotalSection totalViewCount={totalViewCount} totalRevenue={totalRevenue} />
          <DoughnutChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}
