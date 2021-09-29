import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

import Search from "../../components/Search/Search";

import { getItems, getItemsBySearch, deleteItemById } from "../../api/itemapi";

import styles from "./HomeRoute.module.css";

// I MAY RENAME THIS CONTAINER!
// UNLESS I MOVE AWAY FROM ROUTE SWITCHING AND GO FOR MORE OF A SPA

const HomeRoute = () => {
  const [itemDataBase, setItemDatabase] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  let location = useLocation();
  const param = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    if (param) {
      setSearchQuery(param);
      getItemsByQueryHander(param);
      return;
    }
    getItemsHandler();
  }, []);

  const searchSubmit = async (e: string) => {
    setSearchQuery(e);
    await getItemsByQueryHander(e);
  };

  const getItemsHandler = async (): Promise<void> => {
    try {
      const items = await getItems();
      // Handle empty itmes[] from api
      if (items == null) {
        // Reset itemsDataBase to [] if last item was deleted; for rerender!
        setItemDatabase([]);
        return;
      }
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

  // NEEDS DELETE VARIFICATION! 2-Step Delete and notification!
  const deleteItemByIdHandler = async (id: string): Promise<void> => {
    try {
      await deleteItemById(id);
      getItemsHandler();
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const items = itemDataBase.map((item) => {
    return (
      <div className={styles["HomeRoute-Item_Container"]} key={item.id}>
        <div className={styles["Item_Container-Info"]}>
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
          <button onClick={() => deleteItemByIdHandler(item.id)}>Delete</button>
        </div>
        {/* <QRCode value={item.id} /> */}
      </div>
    );
  });

  return (
    <div className={styles["HomeRoute-Container"]}>
      <Search search={searchQuery} searchUpdater={searchSubmit} />
      {items}
    </div>
  );
};

export default HomeRoute;
