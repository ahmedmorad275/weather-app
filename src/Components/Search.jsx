import React, { useContext, useState } from 'react';
import { CityContext } from './CityContext';

const Search = () => {
  const [isDisabled, setDisabled] = useState(true);
  const { city, setCity, setName } = useContext(CityContext);
  function handleClick() {
    if (city.trim() !== '') {
      setName(city);
      setCity('');
    }
  }
  function checkValue() {
    if (city.length > 0) {
      setDisabled(false);
    }
  }
  return (
    <section className="search-container my-8">
      <form>
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            checkValue();
          }}
          type="text"
          placeholder="Enter city name..."
          className="searchInput border bg-(--card) border-(--border) py-1.5 px-3 rounded-lg mr-2.5"
        />
        {/* </div> */}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClick();
            setDisabled(true);
          }}
          id="searchBtn"
          type="submit"
          disabled={isDisabled}
          className="bg-(--primary) px-3 py-1.5 rounded-lg text-white cursor-pointer hover:opacity-85 transition-opacity">
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
