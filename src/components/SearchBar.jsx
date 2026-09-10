import { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
    const [query, setQuery] = useState('');
    const [city, setCity] = useState('Noakhali');
    const [country, setCountry] = useState('Bangladesh');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await onSearchSubmit(query);
        if (data) {
            const [cityName, countryName] = data;
            setCity(cityName);
            setCountry(countryName);
        }
    };

    return (
        <div className="flex flex-row justify-between gap-4 py-2 text-lg">
            <form onSubmit={handleSubmit} className="w-full flex">
                <input
                    id="locationInfo"
                    type="text"
                    placeholder="Enter a city"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-tl-lg rounded-bl-lg border-2 border-(--border-subtle) focus:outline-none"
                />
                <button
                    type="submit"
                    className="px-4 py-2 border-2 border-(--border-subtle) rounded-tr-lg rounded-br-lg"
                >
                    Search
                </button>
            </form>
            <span className="px-4 bg-(--bg-card) rounded-md text-center">
                {`${city} ${country}`}
            </span>
        </div>
    );
};

export default SearchBar;
