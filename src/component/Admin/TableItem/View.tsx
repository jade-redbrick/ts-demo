import { contents } from "../../contents";
import styles from "./index.module.scss";

export default function View() {
  // export default function View({
  //   item,
  //   addViewCount,
  //   setAddViewCount,
  //   showViewCount,
  //   profits,
  //   profitsRate,
  //   challengeItem,
  //   voteCount,
  //   setVoteCount,
  //   onClickLink,
  // }) {
  // const content = contents.find((content) => content.id === item.id);

  return (
    <tr className={styles.row}>
      <td />
      <td>
        <p
          className={styles.link}
          //  onClick={onClickLink}
        >
          링크
        </p>
      </td>
      {/* <td>{content?.title}</td>
      <td>{content?.creator}</td>
      <td>{item?.viewCount?.toLocaleString()}</td> */}
      <td>
        <input
          // value={addViewCount}
          // onChange={(e) => setAddViewCount(Number(e.target.value))}
          maxLength={7}
          type="number"
        />
      </td>
      {/* <td>{showViewCount?.toLocaleString()}</td>
      <td>₩ {profits?.toLocaleString()}</td>
      <td>{profitsRate.toFixed(1)}%</td>
      <td>{challengeItem?.voteCount}</td> */}
      <td>
        <input
          // value={voteCount}
          // onChange={(e) => setVoteCount(Number(e.target.value))}
          maxLength={7}
          type="number"
        />
      </td>
      {/* <td>{challengeItem?.voteCount + voteCount}</td> */}
    </tr>
  );
}
