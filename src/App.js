import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import Opensource from "./Opensource";

export default function App() {
  return (
    <div className="global">
      <div className="container">
        <div className="row search-city">
          <div className="col-12">
            <Search defaultCity="London" />
          </div>
        </div>
        <div className="row"></div>
      </div>
      <Opensource />
    </div>
  );
}
