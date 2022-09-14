import { useRef } from "react";
import "./Filter.css";

export default function Filter(props) {
  const locationRef = useRef("new-york");
  const whenRef = useRef("11/2022");
  const priceRef = useRef("500-2500");
  const typeRef = useRef("houses");

  function clickHandler() {
    props.onSearch("");
    props.onFilter(
      locationRef.current.value,
      whenRef.current.value,
      priceRef.current.value,
      typeRef.current.value
    );
  }

  return (
    <section className="filter-section">
      <div className="filter-item">
        <div>Location</div>
        <select name="location" id="location" ref={locationRef}>
          <option value="new-york">New York, USA</option>
          <option value="houstan">Houston, USA</option>
          <option value="las-vegas">Las Vegas, USA &nbsp;&nbsp;</option>
        </select>
      </div>
      <div className="filter-item">
        <div>When</div>
        <select name="when" id="when" ref={whenRef}>
          <option value="11/2022">Select Move-in Date</option>
          <option value="11/2022">11/2022</option>
          <option value="12/2022">12/2022</option>
          <option value="01/2023">01/2023 &nbsp;&nbsp;</option>
        </select>
      </div>
      <div className="filter-item">
        <div>Price</div>
        <select name="price" id="price" ref={priceRef}>
          <option value="500-2500">$500 - $2,500</option>
          <option value="2500-5000">$2,500 - $5,000</option>
          <option value="5000-7500">$5,000 - $7,500 &nbsp;&nbsp;</option>
        </select>
      </div>
      <div className="filter-item">
        <div>Property Type</div>
        <select name="property-type" id="property-type" ref={typeRef}>
          <option value="houses">Houses</option>
          <option value="duplexes">Duplexes</option>
          <option value="townhouses">Townhouses &nbsp;&nbsp;</option>
        </select>
      </div>
      <div className="filter-item">
        <button className="filter-item--button" onClick={clickHandler}>
          Search
        </button>
      </div>
    </section>
  );
}
