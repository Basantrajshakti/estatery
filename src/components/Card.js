import popular from "./images/popular.png";
import { useRef, useState } from "react";

export default function Card(props) {
  const fav = useRef();
  const [favAdded, setFavAdded] = useState(() => {
    if (localStorage.getItem(props.id)) {
      return true;
    } else {
      return false;
    }
  });

  function checkHandler() {
    let temp = fav.current.closest("article").id;

    if (localStorage.getItem(temp)) {
      setFavAdded(() => false);
      localStorage.removeItem(temp);
      return;
    }
    localStorage.setItem(temp, temp);
    setFavAdded(() => true);
  }

  return (
    <article className="property" id={props.id}>
      <img src={props.src} alt="House" className="property-image" />
      <img src={popular} alt="popular" className="popular-badge" />
      <input
        type="checkbox"
        className="favourites"
        ref={fav}
        onChange={checkHandler}
        checked={favAdded}
      />
      <div className="property-details">
        <div className="price">
          <span>{props.pricetag}</span>
          <span>/month</span>
        </div>
        <h3 className="property-name">{props.name}</h3>
        <p className="property-location">{props.desc}</p>
        <div className="property-descriptions">
          <div className="property-description">
            <span className="material-icons">bed</span>
            <span> {props.beds} Beds</span>
          </div>
          <div className="property-description">
            <span className="material-icons">bathtub</span>
            <span> {props.bathrooms} Bathrooms</span>
          </div>
          <div className="property-description">
            <span className="material-icons">area_chart</span>
            <span>
              {" "}
              {props.area}
              <sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
