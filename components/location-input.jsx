"use client";
import { useState } from "react";

const LocationInput = ({ onQuery, setIsFetching, setError }) => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const locationInputChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const onSubmitLocation = async (event) => {
    setError(null);
    setLoading(true);
    event.preventDefault();
    const apiKey = "db014392ad6e4bad9f685714231405";
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    );
    setLoading(false);
    setLocation("");
    setIsFetching(true);
    const data = await response.json();
    if ("error" in data === true) {
      setError(data.error.message);
    } else {
      onQuery(data);
    }
    setIsFetching(false);
    console.log(data);
  };
  return (
    <form
      onSubmit={onSubmitLocation}
      className="flex gap-2 shadow-lg py-10 px-5 bg-white sm:rounded-xl w-full lg:w-2/3 items-center justify-center"
    >
      <input
        type="text"
        placeholder="Enter city name here..."
        spellCheck="false"
        className="input input-bordered input-primary w-full max-w-xs rounded-md shadow-sm"
        value={location}
        onChange={locationInputChangeHandler}
      />
      <button
        type="submit"
        disabled={loading}
        className={`btn btn-square text-white btn-primary rounded-md shadow-lg ${
          loading && "loading"
        }`}
      >
        {!loading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default LocationInput;
