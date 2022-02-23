import countries from "world-countries";
import CountryInfo from "./CountryInfo";

import React, { useState } from "react";

function CountryList() {
  const [searchString, setSearchString] = useState("");

  let temp = countries.sort((a, b) => b.area - a.area);

  temp = temp.filter((arg) => arg.name.common !== "Antarctica");

  const matchSearch = (country) => {
    const lowerCountryName = country.name.common.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();

    // What is the '0' representing? What happens if you change it to '1'?
    return lowerCountryName.indexOf(lowerCaseSearchString) === 0;
  };
  const filteredCountries = temp.filter(matchSearch).slice(0, 5);

  const countryList = filteredCountries.map((temp) => {
    return (
      <CountryInfo key={temp.ccn3} data={temp} bigArea={countries[0].area} />
    );
  });

  function showInput(event) {
    setSearchString(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Type here..." onChange={showInput} />

      <div>{countryList}</div>
    </div>
  );
}
export default CountryList;
