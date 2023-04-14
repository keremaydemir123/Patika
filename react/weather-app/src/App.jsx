import React from "react";
import "./App.css";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import { useWeather } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  const { weather, setLatLon } = useWeather();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const todayAsNumber = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    // Sunday is 0 in JavaScript's getDay(), so we need to convert it to 6
    if (dayOfWeek === 0) {
      return 6;
    }
    return dayOfWeek - 1;
  };

  return (
    <main className="App">
      <SearchBar />

      <Header />

      <CardContainer>
        {weather?.data?.map((day, index) => {
          return (
            <Card
              key={day.ts}
              day={days[index]}
              icon={day.weather.icon}
              min_temp={day.min_temp}
              max_temp={day.max_temp}
              active={index === todayAsNumber()}
            />
          );
        })}
      </CardContainer>
    </main>
  );
}

export default App;
