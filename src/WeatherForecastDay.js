import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="row">
      <div className="col-3 day-forecast">
        <span className="day day2">{day()}</span>
      </div>
      <div className="col-4 image-forecast">
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>

      <div className="col-5 temperature-forecast">
        <span className="maximum-temperature">{maxTemperature()}° </span>
        <span className="minimum-temperature"> |{minTemperature()}°</span>
      </div>
    </div>
  );
}
