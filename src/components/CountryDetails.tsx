import { useEffect, useState } from 'react';
import axios from 'axios';
import './CountryDetails.css';

interface CountryDetailsProps {
    countryCode: string | null;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ countryCode }) => {
    const [countryDetails, setCountryDetails] = useState<any>(null);

    useEffect(() => {
        if (countryCode) {
            axios.get(`https://restcountries.com/v2/alpha/${countryCode}`)
                .then(response => setCountryDetails(response.data))
                .catch(error => console.error('Error fetching country details:', error));
        }
    }, [countryCode]);

    if (!countryDetails) {
        return <p>Select a country to view details</p>;
    }

    return (
        <div className="country-details">
            <h2>{countryDetails.name}</h2>
            <img src={countryDetails.flags.png} alt={`${countryDetails.name} Flag`} className="flag" />
            <p>Capital: {countryDetails.capital}</p>
            <p>Population: {countryDetails.population}</p>
            <p>Area: {countryDetails.area} square kilometers</p>
            <p>Region: {countryDetails.region}</p>
            <p>Bordering Countries: {countryDetails.borders ? countryDetails.borders.join(', ') : 'None'}</p>

        </div>
    );
};

export default CountryDetails;
