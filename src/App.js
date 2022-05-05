import React from "react";
import "./App.css";
import Search from "./Search";
import Actualinfo from "./Actualinfo";
import Opensource from "./Opensource";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="global">
      <div className="container">
        <div class="row search-city">
          <div class="col-12">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Actualinfo />
          </div>
          <div className="col-6 block-days" id="weather-forecast">
            <Forecast day="Thur" tempMax="25" tempMin="20" />
            <Forecast day="Fri" tempMax="23" tempMin="18" />
            <Forecast day="Sat" tempMax="30" tempMin="27" />
            <Forecast day="Sun" tempMax="22" tempMin="17" />
            <Forecast day="Mon" tempMax="18" tempMin="15" />
          </div>{" "}
        </div>
      </div>
      <Opensource />
    </div>
  );
}
