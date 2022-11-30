import { ListEventGstarChallengeWorld } from "types";
import styles from "./index.module.scss";
import TotalSection from "./TotalSection";

export default function View() {
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
          {/* <Top3 gstarWorlds={gstarWorlds} cpv={cpv} /> */}
          {/* <BarChart chartData={chartData} /> */}
        </div>
        <div className={styles.flex_column}>
          <TotalSection />
          {/* <DoughnutChart chartData={chartData} /> */}
        </div>
      </div>
    </div>
  );
}
