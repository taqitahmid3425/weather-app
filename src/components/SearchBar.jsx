import { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('Bangladesh');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cityName = await onSearchSubmit(query);
    setCity(cityName);
  };

  return (
    <div className="flex flex-row justify-between gap-4 py-2 text-lg">
      <form onSubmit={handleSubmit} className="w-full flex">
        <input
          id="locationInfo"
          type="text"
          placeholder="Enter city"
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
      <span className="px-4 bg-(--bg-card) rounded-md flex items-center">
        {city}
      </span>
    </div>
  );
};

export default SearchBar;
