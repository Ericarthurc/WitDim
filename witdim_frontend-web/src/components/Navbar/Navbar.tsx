import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={styles["navbar"]}>
        <Link to="/" className={styles["navbar-link"]}>
          TEST
        </Link>
        <Link to="/login" className={styles["navbar-link"]}>
          LOGIN
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
