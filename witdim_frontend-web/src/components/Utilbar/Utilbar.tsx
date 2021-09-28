import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styles from "./Utilbar.module.css";

const Utilbar = () => {
  return (
    <div className={styles["Utilbar"]}>
      <Link to="/" className={styles["navbar-link"]}>
        Home
      </Link>
      <Link to="/add" className={styles["navbar-link"]}>
        Add
      </Link>
      <Link to="/scan" className={styles["navbar-link"]}>
        Scan
      </Link>
      <Link to="/login" className={styles["navbar-link"]}>
        Admin
      </Link>
    </div>
  );
};

export default Utilbar;
