import { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "qrcode.react";

import styles from "./Content.module.css";

const Content = () => {
  const [itemDataBase, setItemDatabase] = useState<Items[]>([]);

  useEffect(() => {
    getItemDataBase();
  }, []);

  const getItemDataBase = async () => {
    try {
      const { data } = await axios.get<ItemDatabase>("/api/v1/items");
      if (!data.success) {
        throw new Error("Database failure");
      }
      setItemDatabase(data.data);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const items = itemDataBase.map((item) => {
    return (
      <div className={styles["Content-Item_Container"]} key={item.id}>
        <div className={styles["Item_Container-Info"]}>
          {/* <p className={styles["Item_Info-Label"]}>Id:</p> */}
          {/* <p className={styles["Item_Info-Data"]}>{item.id}</p> */}
          <p className={styles["Item_Info-Label"]}>Product:</p>
          <p className={styles["Item_Info-Data"]}>{item.product}</p>
          <p className={styles["Item_Info-Label"]}>Serial:</p>
          <p className={styles["Item_Info-Data"]}>{item.serial}</p>
          <p className={styles["Item_Info-Label"]}>Condition:</p>
          <p className={styles["Item_Info-Data"]}>{item.condition}</p>
        </div>
        <div className={styles["Item_Container-Buttons"]}>
          <button>QR</button>
          <button>Update</button>
          <button>Delete</button>
        </div>
        {/* <QRCode value={item.id} /> */}
      </div>
    );
  });

  return <div className={styles["Content"]}>{items}</div>;
};

export default Content;
