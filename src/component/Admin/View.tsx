// import { BasicButton } from "components/Button";
import TableItem from "./TableItem";
import styles from "./index.module.scss";
import { GstarChallengeWorld } from "types";

export default function View({
  gstarWorlds,
  cpv,
  handleCpv,
  submitHandler,
  viewCountSum,
  addViewCountSum,
  exposureViewCountSum,
  profitsSum,
  clickedSave,
}: {
  gstarWorlds: GstarChallengeWorld[] | undefined;
  cpv: number;
  handleCpv: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  viewCountSum: number;
  addViewCountSum: number;
  exposureViewCountSum: number;
  profitsSum: number;
  clickedSave: boolean;
}) {
  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <h1>Gstar DashBoard Admin</h1>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <th></th>
            <th>URL</th>
            <th>콘텐츠 이름</th>
            <th>크리에이터</th>
            <th>실제 조회수</th>
            <th>추가 조회수</th>
            <th>노출 조회수</th>
            <th>수익금</th>
            <th>수익 비율</th>
          </tr>
        </thead>
        <tbody>
          {gstarWorlds &&
            gstarWorlds.map((item) => (
              <TableItem
                key={item.id}
                item={item}
                cpv={cpv}
                profitsSum={profitsSum}
                clickedSave={clickedSave}
              />
            ))}
          <tr>
            <td>합계</td>
            <td />
            <td />
            <td />
            <td>{viewCountSum.toLocaleString()}</td>
            <td>{addViewCountSum.toLocaleString()}</td>
            <td>{exposureViewCountSum.toLocaleString()}</td>
            <td>₩ {profitsSum?.toLocaleString()}</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.options}>
        <div className={styles.cpv}>
          <p>CPV 단가</p>
          <input value={cpv} onChange={handleCpv} type="number" />
        </div>
        <button>저장</button>
      </div>
    </form>
  );
}
