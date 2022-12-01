import ViewIcon from "assets/Images/Gstar/view_3d.png";
import RevenueIcon from "assets/Images/Gstar/revenue_3d.png";
import styles from "./index.module.scss";

export default function SectionCard({
  type = "revenue",
  content,
}: {
  type: string;
  content: number;
}) {
  return (
    <div className={styles.section_card}>
      <img alt={type} src={type === "revenue" ? RevenueIcon : ViewIcon} />
      <h3 className={styles.title}>
        {type === "revenue" ? "Total Cumulative Revenue" : "Total Cumulative Views"}
      </h3>
      <p className={styles.content}>{`${content?.toLocaleString()}${
        type === "revenue" ? "원" : "회"
      }`}</p>
    </div>
  );
}
