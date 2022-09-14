import "./Cards.css";
import { useContext } from "react";
import HouseContext from "./store/houses-context";
import Card from "./Card";

export default function Cards({ location, when, price, type, searchedData }) {
  const ctx = useContext(HouseContext);

  let min,
    max,
    isCardFound = false;
  min = +price.split("-")[0];
  max = +price.split("-")[1];

  return (
    <section className="properties">
      {ctx.map((e) => {
        if (searchedData) {
          if (e.name.toLowerCase().includes(searchedData.toLowerCase())) {
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
        } else if (
          e.location === location &&
          e.when === when &&
          e.type === type &&
          e.price >= min &&
          e.price < max
        ) {
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
        <p className="center">Nothing found! Try another filter.</p>
      )}
    </section>
  );
}
