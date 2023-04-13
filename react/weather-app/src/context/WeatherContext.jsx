import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [latLon, setLatLon] = useState({ latitude: 50, longitude: 50 });

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "ff9b4d76bb044743aca36d2a168b64ff";
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
