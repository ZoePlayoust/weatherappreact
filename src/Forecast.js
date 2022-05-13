import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setforecast] = useState(null);

  useEffect(() => {
    setloaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setforecast(response.data.daily);
    setloaded(true);
  }
  function load() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiKey = "411a942cf48762f8f3d00fd7b552fe5c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className=" forecast" key={index}>
                {" "}
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
