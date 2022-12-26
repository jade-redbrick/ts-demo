// import { BasicButton } from "components/Button";
import TableItem from "./TableItem";
import styles from "./index.module.scss";

// export default function View({
//   gstarWorlds,
//   submitHandler,
//   cpv,
//   handleCpv,
//   viewCountSum,
//   addViewCountSum,
//   exposureViewCountSum,
//   profitsSum,
//   clickedSave,
//   challenge,
//   voteCountSum,
//   extraVoteCountSum,
// }) {
export default function View() {
  return (
    <form
      className={styles.container}
      // onSubmit={submitHandler}
    >
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
            <th>투표 수</th>
            <th>추가 투표 수</th>
            <th>합계 투표 수</th>
          </tr>
        </thead>
        <tbody>
          {/* {gstarWorlds?.length > 0 &&
            gstarWorlds?.map((item) => (
              <TableItem
                item={item}
                key={item.url}
                cpv={cpv}
                profitsSum={profitsSum}
                clickedSave={clickedSave}
                challenge={challenge}
              />
            ))} */}
          <tr>
            <td>합계</td>
            <td />
            <td />
            <td />
            {/* <td>{viewCountSum?.toLocaleString()}</td>
            <td>{addViewCountSum?.toLocaleString()}</td>
            <td>{exposureViewCountSum?.toLocaleString()}</td>
            <td>₩ {profitsSum?.toLocaleString()}</td> */}
            <td>100%</td>
            {/* <td>{voteCountSum}</td>
            <td>{extraVoteCountSum}</td>
            <td>{voteCountSum + extraVoteCountSum}</td> */}
          </tr>
        </tbody>
      </table>
      <div className={styles.options}>
        <div className={styles.cpv}>
          <p>CPV 단가</p>
          {/* <input value={cpv} onChange={handleCpv} type="number" /> */}
        </div>
        <button>저장</button>
      </div>
    </form>
  );
}
