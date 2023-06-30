import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const Weather = () => {
  const fetchApp = async () => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=d1f62489d43e404fa2b130103233006&q=London&aqi=no`
    );
    const data = res;
    return data;
  };

  const { data, isLoading, error, isError } = useQuery("weather", fetchApp);

  return <div className="mainDiv"></div>;
};

export default Weather;
