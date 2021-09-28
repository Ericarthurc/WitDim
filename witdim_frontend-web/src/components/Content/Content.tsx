import { useState, useEffect } from "react";
import axios from "axios";

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
      <div key={item.id}>
        <span>{item.id}</span>
        <span>{item.product}</span>
        <span>{item.serial}</span>
        <span>{item.condition}</span>
        <p></p>
      </div>
    );
  });

  return <div className="Content">{items}</div>;
};

export default Content;
