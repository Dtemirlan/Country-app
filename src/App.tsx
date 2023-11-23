import { useState } from 'react';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import './App.css';

function App() {
    const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);

    const handleSelectCountry = (countryCode: string) => {
        setSelectedCountryCode(countryCode);
    };

    return (
        <div className="app-container">
            <CountryList onSelectCountry={handleSelectCountry} />
            <CountryDetails countryCode={selectedCountryCode} />
        </div>
    );
}

export default App;
