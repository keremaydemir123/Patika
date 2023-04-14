import React from "react";

function Header({ cityName, countryCode }) {
  if (!cityName || !countryCode) return null;

  return (
    <div className="location-container">
      <h1 className="location">
        {cityName}
        <span className="country_code">, {countryCode}</span>
      </h1>
    </div>
  );
}

export default Header;
