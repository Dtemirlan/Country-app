import React, { useState } from 'react';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
    const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);

    const handleSelectCountry = (countryCode: string) => {
        setSelectedCountryCode(countryCode);
    };

    return (
        <div>
            <CountryList onSelectCountry={handleSelectCountry} />
            <CountryDetails countryCode={selectedCountryCode} />
        </div>
    );
}

export default App;
