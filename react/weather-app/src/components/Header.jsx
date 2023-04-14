import React from "react";
import { useWeather } from "../context/WeatherContext";

function Header() {
  const { weather } = useWeather();
  if (!weather) return null;

  return (
    <div className="location-container">
      <h1 className="location">
        {weather.city_name}
        <span className="country_code">, {weather.country_code}</span>
      </h1>
    </div>
  );
}

export default Header;
