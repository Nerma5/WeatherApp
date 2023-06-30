import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Button } from "@mantine/core";
// import { Loader } from "@mantine/core";

const Weather = () => {
  const fetchApp = async () => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=d1f62489d43e404fa2b130103233006&q=${searchedCity}&aqi=no`
    );
    const data = res;
    return data;
  };
  const [searchCity, setSearchCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");

  const searchInputHandler = () => {
    setSearchedCity(searchCity);
  };

  const exploreCity = (e) => {
    setSearchCity(e.target.value);
  };

  const { data: weatherData, isLoading } = useQuery(
    ["weather", searchedCity],
    fetchApp
  );    

  return (
    <div className="mainDiv">
      <div>
        <h1>Weather in</h1>
        <div>
          <input type="text" value={searchCity} onChange={exploreCity} />
          <Button
            color="teal"
            radius="xl"
            size="md"
            uppercase
            onClick={searchInputHandler}
            // handleSearch={exploreCity}
          >
            Search
          </Button>
        </div>

        {isLoading ? (
        //   <Loader color="green" size="lg" />
        <p>loading</p>
        ) : (
          <div className="card">
            <h2>Current Weather in {weatherData.location?.name}</h2>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
            <p>Weather: {weatherData.current.condition?.text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
