import ItemCard from "./ItemCard";
import styles from "./index.module.scss";

function View({ cpv }: { cpv: number }) {
  return (
    <div className={styles.top_list}>
      <ItemCard ranking={1} cpv={cpv} />
      {/* {sortedWorlds?.slice(0, 3).map((item, i) => (
        <ItemCard item={item} key={item.id} ranking={i + 1} cpv={cpv} />
      ))} */}
    </div>
  );
}

export default View;
