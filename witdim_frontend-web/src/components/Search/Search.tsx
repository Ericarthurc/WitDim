import { useState } from "react";

import styles from "./Search.module.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchSubmit = (e: string) => {
    console.log(e);
    setSearchQuery(e);
  };

  return (
    <div style={{ marginBottom: "25px" }}>
      <div className={styles["Search-Input_Container"]}>
        <div className={styles["Search-Icon_Container"]}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </div>
        <input
          className={styles["Search-Input"]}
          type="text"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          maxLength={150}
          value={searchQuery}
          onChange={(e) => searchSubmit(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Search;
