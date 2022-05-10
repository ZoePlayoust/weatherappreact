import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === `celsius`) {
    return (
      <div className="temperatures ">
        <div className="">
          <span className="temperature" id="temperature-variable">
            {Math.round(props.celsius)}
          </span>
          <span className="unit">°C</span> <span className="unit">| </span>{" "}
          <a href="/" className="unit" onClick={convertToFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperatures ">
        <div className="">
          <span className="temperature" id="temperature-variable">
            {Math.round(fahrenheit)}
          </span>
          <a href="/" className="unit" onClick={convertToCelsius}>
            °C
          </a>{" "}
          <span className="unit">| </span> <span className="unit">°F</span>
        </div>
      </div>
    );
  }
}
