import React, { useState } from "react";
import cities from "../../cities.json";
import { useWeather } from "../context/WeatherContext";

function SearchBar() {
  const [input, setInput] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const { setLatLon } = useWeather();

  const filtered = cities.filter((city) => {
    return city.name.toLowerCase().includes(input.toLowerCase());
  });

  function handleListItemClick(event) {
    setInput(event.target.innerText);
    setSelectedItem(
      filtered.findIndex((city) => city.name === event.target.innerText)
    );
    handleCitySelect(
      filtered.find((city) => city.name === event.target.innerText)
    );
    setShowResults(false);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
    setShowResults(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInput(filtered[0].name);
    handleCitySelect(filtered[0]);
    setShowResults(false);
  }

  const handleCitySelect = (city) => {
    setLatLon({ latitude: city.latitude, longitude: city.longitude });
  };

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city"
          onChange={handleInputChange}
          value={input}
        />
        <img src="/search-icon.svg" alt="icon" className="search-icon" />
        {input && filtered.length > 0 && showResults && (
          <ul className="search-results">
            {filtered.map((city, index) => {
              return (
                <li
                  key={city.id}
                  className={selectedItem === index ? "selected" : ""}
                  onClick={handleListItemClick}
                >
                  {city.name}
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </>
  );
}

export default SearchBar;
