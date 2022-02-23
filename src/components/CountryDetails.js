import { useParams } from "react-router-dom";
import countries from "world-countries";
import CountryInfo from "./CountryInfo";

const CountryDetails = (props) => {
  let { id } = useParams();

  const countrie = getCountryByCca3(id);

  const bordering = countrie.borders.map((arg) => getCountryByCca3(arg));

  const countryList = bordering.map((temp) => {
    return (
      <CountryInfo key={temp.ccn3} data={temp} bigArea={countries[0].area} />
    );
  });

  return <div>{countryList}</div>;
};

const getCountryByCca3 = (id) => {
  const temp = countries.find((temp) => temp.cca3 === id);
  return temp;
};

export default CountryDetails;
