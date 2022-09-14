import React, { useRef, useState, useEffect } from "react";
import "./Search.css";

export default function Search(props) {
  const searchRef = useRef("");
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    if (props.isEmpty) {
      setSearchVal("");
    }
  }, [props.isEmpty]);

  function changeHandler() {
    setSearchVal(() => searchRef.current.value);
    setTimeout(() => {
      props.onSearch(searchRef.current.value);
    }, 600);
  }

  return (
    <section className="search-section">
      <h1>Search properties to rent</h1>
      <div className="search-place">
        <input
          ref={searchRef}
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search properties"
          onChange={changeHandler}
          value={searchVal}
        />
        <i className="bi bi-search"></i>
      </div>
    </section>
  );
}
