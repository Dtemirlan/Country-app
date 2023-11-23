import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CountryList.css';

interface Country {
    alpha3Code: string;
    name: string;
}

interface CountryListProps {
    onSelectCountry: (countryCode: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({ onSelectCountry }) => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        axios.get<Country[]>('https://restcountries.com/v2/all?fields=alpha3Code,name')
            .then(response => setCountries(response.data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    const handleCountryClick = (country: Country) => {
        onSelectCountry(country.alpha3Code);
    };

    return (
        <div className="country-list">
            <h2>Country List</h2>
            <ul>
                {countries.map(country => (
                    <li key={country.alpha3Code} onClick={() => handleCountryClick(country)}>
                        <a href="#">{country.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
