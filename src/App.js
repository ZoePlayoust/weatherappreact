import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import Actualinfo from "./Actualinfo";
import Opensource from "./Opensource";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="global">
      <div className="container">
        <div className="row search-city">
          <div className="col-12">
            <Search defaultCity="Arles" />
          </div>
        </div>
        <div className="row"></div>
      </div>
      <Opensource />
    </div>
  );
}
