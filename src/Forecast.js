import React from "react";
import "./App.css";

export default function Forecast(props) {
  return (
    <div className=" row forecast">
      <div className="col-3 day-forecast">
        <span className="day day2">{props.day}</span>
      </div>
      <div className="col-4 image-forecast">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          className="image-forecast"
          alt="cloudy"
          width="60px"
        />
      </div>

      <div className="col-5 temperature-forecast">
        <span className="maximum-temperature">{props.tempMax}° </span>
        <span className="minimum-temperature"> |{props.tempMin}°</span>
      </div>
    </div>
  );
}
