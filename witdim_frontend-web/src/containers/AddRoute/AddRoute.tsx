import { useState } from "react";

import { createItem } from "../../api/itemapi";

import styles from "./AddRoute.module.css";

// NEEDS FORM VALIDATION AND NOTIFCATIONS!!!!

const initialState = {
  product: "",
  serial: "",
  condition: "",
};

const AddRoute = () => {
  const [formData, setFormData] = useState(initialState);

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createItem(formData);
      setFormData(initialState);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  return (
    <div className={styles["AddRoute-Container"]}>
      <form
        className={styles["AddRoute-Form_Container"]}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => formHandler(e)}
      >
        <h3>Add Item</h3>
        <div className={styles["Form_Container-Inputs"]}>
          <div className={styles["Form-Input"]}>
            <label htmlFor="product">Product:</label>
            <input
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              maxLength={150}
              name="product"
              type="text"
              required={true}
              value={formData.product}
              onChange={(e) =>
                setFormData({ ...formData, product: e.target.value })
              }
            />
          </div>
          <div className={styles["Form-Input"]}>
            <label htmlFor="serial">Serial:</label>
            <input
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              maxLength={150}
              name="serial"
              type="text"
              required={true}
              value={formData.serial}
              onChange={(e) =>
                setFormData({ ...formData, serial: e.target.value })
              }
            />
          </div>
          <div className={styles["Form-Input"]}>
            <label htmlFor="condition">Condition:</label>
            <input
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              maxLength={150}
              name="condition"
              type="text"
              required={true}
              value={formData.condition}
              onChange={(e) =>
                setFormData({ ...formData, condition: e.target.value })
              }
            />
          </div>
        </div>
        <button className={styles["Form-Buttom_Submit"]} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddRoute;
