import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WeatherProvider } from "../src/context/WeatherContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
