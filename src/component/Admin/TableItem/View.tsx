import { Input } from "antd";
import { GstarChallengeWorld } from "types";
import { contents } from "../../contents";
import styles from "./index.module.scss";

export default function View({
  item,
  addViewCount,
  setAddViewCount,
  showViewCount,
  profits,
  profitsRate,
  onClickLink,
}: {
  item: GstarChallengeWorld;
  addViewCount: number;
  setAddViewCount: React.Dispatch<React.SetStateAction<number>>;
  showViewCount: number;
  profits: number;
  profitsRate: number;
  onClickLink: () => void;
}) {
  const content = contents.find((content) => content.id === item.id);

  return (
    <tr className={styles.row}>
      <td />
      <td>
        <p className={styles.link} onClick={onClickLink}>
          링크
        </p>
      </td>
      <td>{content?.title}</td>
      <td>{content?.creator}</td>
      <td>{item?.viewCount?.toLocaleString()}</td>
      <td>
        <Input
          value={addViewCount}
          onChange={(e) => setAddViewCount(Number(e.target.value))}
          maxLength={7}
          type="number"
        />
      </td>
      <td>{showViewCount?.toLocaleString()}</td>
      <td>₩ {profits?.toLocaleString()}</td>
      <td>{profitsRate.toFixed(1)}%</td>
    </tr>
  );
}
