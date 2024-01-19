import { BiLoaderCircle } from "react-icons/bi";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <BiLoaderCircle />
      </div>
    </div>
  );
}

export default Loader;
