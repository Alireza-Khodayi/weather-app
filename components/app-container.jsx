"use client";
import { useState } from "react";
import LocationInput from "./location-input";
import WeatherInfo from "./weather-info/weather-info";
const AppContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  return (
    <div className="container mx-auto  flex items-center justify-center flex-col gap-5">
      <LocationInput
        onQuery={setWeatherData}
        setIsFetching={setIsFetching}
        setError={setError}
      />
      <WeatherInfo
        weatherData={weatherData}
        isFetching={isFetching}
        error={error}
      />
    </div>
  );
};

export default AppContainer;
