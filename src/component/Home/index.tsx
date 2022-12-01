import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link to="/dashboard">DashBoard</Link>
    </div>
  );
}
