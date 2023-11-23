import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Country {
    alpha3Code: string;
    name: string;
}

interface CountryListProps {
    onSelectCountry: (countryCode: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({ onSelectCountry }) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    useEffect(() => {
        axios.get<Country[]>('https://restcountries.com/v2/all?fields=alpha3Code,name')
            .then(response => setCountries(response.data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    const handleCountryClick = (country: Country) => {
        setSelectedCountry(country.alpha3Code);
        onSelectCountry(country.alpha3Code);
    };

    return (
        <div>
            <h2>Country List</h2>
            <ul>
                {countries.map(country => (
                    <li key={country.alpha3Code} onClick={() => handleCountryClick(country)}>
                        {country.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
