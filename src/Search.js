import React from "react";
import "./App.css";

export default function Search() {
  return (
    <div className="row">
      <form className="search-city-bar col-8">
        <input
          type="search"
          class="form-control"
          id="city-form"
          placeholder="Enter the name of your city"
          size="55px"
        />
      </form>
      <div className="col-2 search-city-button">
        <button
          type="submit"
          className="btn btn-primary mb-3 search"
          id="search"
        >
          Search
        </button>
      </div>
      <div className="col-2 search-city-button">
        <button
          type="button"
          className="btn btn-primary mb-3 current"
          id="current-location"
        >
          Current
        </button>
      </div>
    </div>
  );
}
