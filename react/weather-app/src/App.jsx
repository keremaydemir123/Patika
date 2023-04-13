import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import { useWeather } from "./context/WeatherContext";
import SearchBar from "./components/SearchBar";

function App() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const { weather, setLatLon } = useWeather();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          setLatLon({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setPermissionGranted(true);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }, []);

  const todayAsNumber = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    // Sunday is 0 in JavaScript's getDay(), so we need to convert it to 6
    if (dayOfWeek === 0) {
      return 6;
    }

    return dayOfWeek - 1;
  };

  const handlePermissionClick = () => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setPosition({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
                setPermissionGranted(true);
              },
              (error) => {
                console.log(error);
              }
            );
          } else if (permissionStatus.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setPosition({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
                setPermissionGranted(true);
              },
              (error) => {
                console.log(error);
              }
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setPermissionGranted(true);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  };

  const handleCitySelect = (city) => {
    console.log(city);
    setLatLon({ latitude: city.latitude, longitude: city.longitude });
  };

  return (
    <>
      <SearchBar onCitySelect={handleCitySelect} />

      <div className="location-container">
        <h1 className="location">
          {weather.city_name}
          <span className="country_code">{weather.country_code}</span>
        </h1>
      </div>

      <CardContainer>
        {weather?.data?.map((day, index) => {
          return (
            <Card
              key={day.ts}
              day={days[index]}
              icon={day.weather.icon}
              min_temp={day.min_temp}
              max_temp={day.max_temp}
              active={index === todayAsNumber() ? true : false}
            />
          );
        })}
      </CardContainer>

      <div>
        {!permissionGranted && (
          <button onClick={handlePermissionClick}>
            Grant geolocation permission
          </button>
        )}
        {permissionGranted && (
          <p>
            Geolocation permission granted! Your position is (
            {position.latitude}, {position.longitude})
          </p>
        )}
      </div>
    </>
  );
}

export default App;
