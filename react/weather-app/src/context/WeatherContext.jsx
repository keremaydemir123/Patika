import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import cities from "../../cities.json";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [latLon, setLatLon] = useState({
    latitude: cities[0].latitude,
    longitude: cities[0].longitude,
  });

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latLon.latitude}&lon=${latLon.longitude}&key=${apiKey}`
      );

      const data = await response.json();
      setWeather(data);
    };
    fetchData();
  }, [latLon]);

  return (
    <WeatherContext.Provider value={{ weather, setLatLon }}>
      {children}
    </WeatherContext.Provider>
  );
};
