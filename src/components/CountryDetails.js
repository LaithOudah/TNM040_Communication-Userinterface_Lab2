import { useParmas } from "react-router-dom";
import countries from "world-countries";

const CountryDetails = (props) => {
    let { id } = useParmas();

    const land = getCCA3(id);
    return <div>{land.name.common}</div>;
};

const getCCA3 = (id) => {
    const holder = countries.find((holder) => holder.cca3 == id);
    return holder;
};

export default CountryDetails;