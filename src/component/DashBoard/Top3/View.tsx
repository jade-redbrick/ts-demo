import { SortedWorld } from "types";
import ItemCard from "./ItemCard";
import styles from "./index.module.scss";

function View({ sortedWorlds, cpv }: { sortedWorlds: SortedWorld[] | undefined; cpv: number }) {
  return (
    <div className={styles.top_list}>
      {sortedWorlds?.slice(0, 3).map((item, i) => (
        <ItemCard item={item} key={item.id} ranking={i + 1} cpv={cpv} />
      ))}
    </div>
  );
}

export default View;
