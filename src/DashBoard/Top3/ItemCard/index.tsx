import Rank1 from "assets/Images/Gstar/rank1.png";
import Rank2 from "assets/Images/Gstar/rank2.png";
import Rank3 from "assets/Images/Gstar/rank3.png";
import ViewIcon from "assets/Images/Gstar/views_icon.svg";
import RevenueIcon from "assets/Images/Gstar/revenue_icon.svg";
import { contents } from "../../contents";
import styles from "./index.module.scss";

function ItemCard({ ranking, cpv }: { ranking: number; cpv: number }) {
  // const viewCount = item.extraViewCount + item.viewCount;
  // const content = contents.find((content) => content.id === item.id);
  let medal = Rank1;

  switch (ranking) {
    case 1:
      medal = Rank1;
      break;
    case 2:
      medal = Rank2;
      break;
    case 3:
      medal = Rank3;
      break;
    default:
      break;
  }

  return (
    <div className={styles.item_wrap}>
      <div className={styles.item_card}>
        <img alt="rank icon" src={medal} className={styles.rank_img} />
        {/* <img alt="thumbnail" src={content.thumbnail} />
        <h3 className={styles.title}>{content.title}</h3>
        <p className={styles.creator}>{content.creator}</p> */}

        <div className={styles.info}>
          <div className={styles.views}>
            <img alt="view icon" src={ViewIcon} />
            {/* {viewCount.toLocaleString()}회 */}
          </div>
          <div className={styles.revenue}>
            <img alt="revenue icon" src={RevenueIcon} />
            {/* {(viewCount * cpv).toLocaleString()}원 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
