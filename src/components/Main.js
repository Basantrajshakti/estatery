import React, { useState, Suspense } from "react";

import Search from "./Search";
import Filter from "./Filter";
import Spinner from "./Spinner";
const Cards = React.lazy(() => import("./Cards"));

export default function Main() {
  const [location, setLocation] = useState("new-york");
  const [when, setWhen] = useState("11/2022");
  const [price, setPrice] = useState("500-2500");
  const [type, setType] = useState("houses");
  const [searchedData, setSearchedData] = useState("");

  const filterHandler = (loc, wh, pr, typ) => {
    setLocation(loc);
    setWhen(wh);
    setPrice(pr);
    setType(typ);
  };

  const searchHandler = (data) => {
    setSearchedData(data);
  };

  return (
    <main>
      <Search onSearch={searchHandler} isEmpty={!searchedData} />
      <Filter onFilter={filterHandler} onSearch={searchHandler} />

      <Suspense fallback={<Spinner />}>
        <Cards
          location={location}
          when={when}
          price={price}
          type={type}
          searchedData={searchedData}
        />
      </Suspense>
    </main>
  );
}
