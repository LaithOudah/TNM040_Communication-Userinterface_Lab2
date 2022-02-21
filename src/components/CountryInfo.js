import "./CountryList";
import "../App,css";
import {BroswerRouter as Router, Link } from "react-router-dom";

// Component CountryInfo containting props
const CountryInfo = ({ data, fatArea, detailed }) => {
  // Props
  const Name = data.name.common;
  const Area = data.area;
  const Capital = data.capital;
  const Region = data.region;
  let Ratio = Area / fatArea;
  let bredbror = Ratio * 80 + "%";

  return (
    <div className="country">
      <span className="countryName">{Name} </span>
      <span>
        {" "}
        {Area} km<sup>2</sup>{" "}
      </span>
      <div className="bar" style={{ width: bredbror }}>
        {" "}
      </div>
      {detailed && (
        <div>
          Capital: {Capital} <br></br> Region: {Region}
        </div>
      )}{" "}
    </div>
  );
};
export default CountryInfo;
