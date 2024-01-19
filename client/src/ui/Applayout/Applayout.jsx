import { Outlet } from "react-router-dom";
import styles from "../Home/Home.module.css";
import Navbar from "../Navbar/Navbar";

function Applayout() {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
    </div>
  );
}

export default Applayout;
