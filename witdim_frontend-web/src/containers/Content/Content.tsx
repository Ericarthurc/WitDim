import { useState, useEffect } from "react";
import QRCode from "qrcode.react";

import Utilbar from "../../components/Utilbar/Utilbar";
import Search from "../../components/Search/Search";

import { getItems, getItemsBySearch } from "../../api/itemapi";

import styles from "./Content.module.css";

const Content = () => {
  const [itemDataBase, setItemDatabase] = useState<Items[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    getItemsHandler();
  }, []);

  const searchSubmit = async (e: string) => {
    setSearchQuery(e);
    await getItemsByQueryHander(e);
  };

  const getItemsHandler = async (): Promise<void> => {
    try {
      const items = await getItems();
      setItemDatabase(items);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const getItemsByQueryHander = async (search: string): Promise<void> => {
    if (search.length == 0) {
      getItemsHandler();
      return;
    }
    try {
      const items = await getItemsBySearch(search);
      setItemDatabase(items);
    } catch (error) {
      setItemDatabase([]);
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

  return (
    <div className={styles["Content"]}>
      <Utilbar />
      <Search search={searchQuery} searchUpdater={searchSubmit} />
      {items}
    </div>
  );
};

export default Content;
