import { GstarChallengeWorld } from "types";
import Top3 from "./Top3";
import TotalSection from "./TotalSection";
import styles from "./index.module.scss";

export default function View({ gstarWorlds }: { gstarWorlds: GstarChallengeWorld[] | undefined }) {
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
          <Top3 gstarWorlds={gstarWorlds} />
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
