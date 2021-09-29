import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// @ts-ignore
import QrScan from "react-qr-reader";

import styles from "./ScanRoute.module.css";

const ScanRoute = () => {
  const [qrscan, setQrscan] = useState("");

  const handleScan = (data: any) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div className={styles["ScanRoute-Container"]}>
      <div className={styles["ScanRoute-Scanner_Container"]}>
        <QrScan
          showViewFinder={false}
          resolution={1000}
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ height: 320, width: 320 }}
        />
      </div>
      <Link
        className={styles["ScanRoute-Search_Link"]}
        to={{ pathname: "/", search: `?id=${qrscan}` }}
      >
        Search
      </Link>
      <br />
      {qrscan && (
        <div>
          <p>Id Found: {qrscan}</p>
        </div>
      )}
    </div>
  );
};

export default ScanRoute;
