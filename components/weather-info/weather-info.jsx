import React from "react";
import Spinner from "../UI/spinner";

const WeatherInfo = ({ weatherData, isFetching, error }) => {
  if (error) {
    return (
      <div className="flex gap-5 shadow-lg py-16 px-5 bg-white sm:rounded-xl w-full lg:w-2/3 items-center font-bold text-center justify-center flex-col">
        <img className="rounded-3xl" src="/404.jpg" alt="Location Not Found" />
        {error}
      </div>
    );
  }

  if (weatherData === null) {
    return (
      <div className="flex gap-5 shadow-lg py-16 px-5 bg-white sm:rounded-xl w-full lg:w-2/3 items-center text-center justify-center flex-col">
        <img
          className="rounded-3xl"
          src="/farm.jpg"
          alt="No City Searched Already"
        />
        Enter a city name to show weather info...
      </div>
    );
  }

  return (
    <div className="flex gap-2 shadow-lg py-10 px-5 bg-white sm:rounded-xl w-full lg:w-2/3 items-center">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-10 justify-center items-center">
          <div>
            <h3 className="text-xl font-bold">{weatherData.location.name}</h3>
            <span>
              {weatherData.location.region} , {weatherData.location.country}
            </span>
          </div>
          <div className="text-5xl font-bold items-center justify-center flex">
            <img
              className="w-24"
              src={`http://${weatherData.current.condition.icon}`}
            />
            {weatherData.current.temp_c}°C
          </div>
        </div>
        <div></div>
        <div className="font-bold">
          Wind Speed : {weatherData.current.wind_kph} KPH
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
