import React, { useState, useEffect } from "react";

import SearchCarById from "./SearchCarById";
import SearchCarByColor from "./SearchCarByColor";

import { getRandomCarId } from "./../../services/carService";
import { getRandomColor } from "./../../services/carService";

const SearchCar = () => {
  const [searchingValue, setSearchingValue] = useState(null);
  const [search, setSearch] = useState(null);

  const handleGetCarById = () => {
    setSearchingValue(getRandomCarId());
    setSearch("SEARCH_BY_ID");
  };

  const handleGetCarByColor = () => {
    setSearchingValue(getRandomColor());
    setSearch("SEARCH_BY_COLOR");
  };

  return (
    <>
      <h2>Search Vehicle</h2>
      <button onClick={handleGetCarByColor}>GET ALL RED CARS</button>
      <button onClick={handleGetCarById}>GET A RANDOM CAR</button>

      {search === "SEARCH_BY_ID" && <SearchCarById carId={searchingValue} />}
      {search === "SEARCH_BY_COLOR" && (
        <SearchCarByColor
          color={searchingValue}
          selectCar={(carId) => {
            setSearchingValue(carId);
            setSearch("SEARCH_BY_ID");
          }}
        />
      )}
    </>
  );
};
export default SearchCar;
