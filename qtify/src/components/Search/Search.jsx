import React from "react";
import { useState } from "react";
import { ReactComponent as Searchbar } from "../../Assets/Searchbar.svg";
import styles from "./search.module.css";
const Search = ({ placeholder, data }) => {
  const [val, setval] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handelSearch = (e) => {
    console.log(e.target.value);
    setval(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className={styles.wrapper}>
        <input
          className={styles.search}
          placeholder={placeholder}
          value={val}
          onChange={handelSearch}
        ></input>
        <button className={styles.searchbutton} type="submit">
          <Searchbar />
        </button>
      </form>
    </div>
  );
};

export default Search;
