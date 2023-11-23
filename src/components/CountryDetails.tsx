import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CountryDetailsProps {
    countryCode: string | null;
}

interface CountryDetailsData {
    name: string;
    capital: string;
    population: number;
    region: string;
    borders: string[];
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ countryCode }) => {
    const [countryDetails, setCountryDetails] = useState<CountryDetailsData | null>(null);

    useEffect(() => {
        if (countryCode) {
            axios.get<CountryDetailsData>(`https://restcountries.com/v2/alpha/${countryCode}`)
                .then(response => setCountryDetails(response.data))
                .catch(error => console.error('Error fetching country details:', error));
        }
    }, [countryCode]);

    return (
        <div>
            <h2>Country Details</h2>
            {countryDetails ? (
                <div>
                    <h3>{countryDetails.name}</h3>
                    <p>Capital: {countryDetails.capital}</p>
                    <p>Population: {countryDetails.population}</p>
                    <p>Region: {countryDetails.region}</p>
                    <p>Bordering Countries: {countryDetails.borders.join(', ')}</p>
                </div>
            ) : (
                <p>Select a country to view details.</p>
            )}
        </div>
    );
};

export default CountryDetails;
