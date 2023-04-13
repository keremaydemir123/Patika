import React, { useState, useEffect, useRef } from "react";
import cities from "../../cities.json";

function SearchBar({ onCitySelect }) {
  const [input, setInput] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef(null);

  const filtered = cities.filter((city) => {
    return city.name.toLowerCase().includes(input.toLowerCase());
  });

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowUp") {
        setSelectedItem((prevSelectedItem) =>
          prevSelectedItem === 0 ? filtered.length - 1 : prevSelectedItem - 1
        );
      } else if (event.key === "ArrowDown") {
        setSelectedItem((prevSelectedItem) =>
          prevSelectedItem === filtered.length - 1 ? 0 : prevSelectedItem + 1
        );
      } else if (event.key === "Enter") {
        setInput(filtered[selectedItem].name);
        onCitySelect(filtered[selectedItem]);
        setShowResults(false);
      }

      // Scroll the selected item into view
      if (
        resultsRef.current &&
        resultsRef.current.children.length > 0 &&
        event.key === "ArrowUp"
      ) {
        resultsRef.current.children[selectedItem - 1].scrollIntoView({
          block: "nearest",
          inline: "nearest",
        });
      }

      if (
        resultsRef.current &&
        resultsRef.current.children.length > 0 &&
        event.key === "ArrowDown"
      ) {
        resultsRef.current.children[selectedItem + 1].scrollIntoView({
          block: "nearest",
          inline: "nearest",
        });
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filtered, selectedItem]);

  function handleListItemClick(event) {
    setInput(event.target.innerText);
    onCitySelect(filtered[selectedItem]);
    setShowResults(false);
  }

  function handleInputFocus() {
    setShowResults(true);
  }

  function handleInputBlur(event) {
    // Use setTimeout to allow time for click to register before hiding results
    setTimeout(() => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setShowResults(false);
      }
    }, 0);
  }

  function clearInput() {
    setInput("");
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={input}
        />
        {input && showResults && (
          <ul className="search-results" ref={resultsRef}>
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
        {input && !showResults && (
          <div className="clear-input" onClick={clearInput}>
            &times;
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
