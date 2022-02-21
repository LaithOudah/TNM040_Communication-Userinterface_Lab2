import React, {useState} from "react";
import countries from "world-countries";
import CountryInfo from "./CountryInfo";

function CountryList() {
const [searchString, setSearchString] = useState ("");

let tempHolder = countries.sort((a, b) => b.area - a.area);

tempHolder = tempHolder.filter((argValue) => argValue.name.common !== "Antarctica");

const foundSearch = (country) => {
    const toSmallName = country.name.common.toLowerCase();
    const toSmallNameSearch = searchString.toLowerCase();

    return toSmallName.indexOf(toSmallNameSearch) === 0;

};

const filteredCountries = tempHolder.filter(foundSearch).slice(0, 5);
const CountryList = filteredCountries.map((tempHolder, index => {
    return (
        <CountryInfo key = {tempHolder.ccn3} data={tempHolder} fatArea={countries[0].area}/>
    );
}));

function showInput(event) {
    setSearchString(event.target.value);
}

return (
    <div>
    <input type="text" placeholder="Skriv här..." onChange={showInput} />
    <div>{CountryList}</div>
    </div>
);

}

export default CountryList;
