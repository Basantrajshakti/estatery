import React, { useContext, Suspense } from "react";
import HouseContext from "./store/houses-context";

import "./Cards.css";
import "./Favourites.css";
import Spinner from "./Spinner";
const Card = React.lazy(() => import("./Card"));

export default function Favourites() {
  const ctx = useContext(HouseContext);
  let isCardFound = false;

  return (
    <Suspense fallback={<Spinner />}>
      <main>
        <h1>Favourites</h1>
        <section className="properties">
          {ctx.map((e) => {
            if (localStorage.getItem(e.id)) {
              isCardFound = true;

              return (
                <Card
                  key={e.id}
                  id={e.id}
                  pricetag={e.pricetag}
                  src={e.src}
                  area={e.area}
                  name={e.name}
                  desc={e.desc}
                  beds={e.beds}
                  bathrooms={e.bathrooms}
                />
              );
            }
          })}

          {!isCardFound && (
            <p className="center">
              Nothing found! Add some houses to favourites.
            </p>
          )}
        </section>
      </main>
    </Suspense>
  );
}
