import "./CountryList";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const CountryInfo = ({ data, bigArea }) => {
  const Namn = data.name.common;
  const Area = data.area;

  return (
    <div>
      <Link to={"/country/" + data.cca3}>
        <span className="bold"> {Namn} </span>
        <span className="notBold">
          {Area}km<sup>2</sup>
        </span>
        <div
          className="bar"
          style={{ width: +(data.area / bigArea) * 50 + "%" }}
        ></div>
      </Link>
    </div>
  );
};

export default CountryInfo;
