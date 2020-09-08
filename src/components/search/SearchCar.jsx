import React, { useState } from "react";

import SearchByCarId from "./SearchByCarId";

import { getRandomCarId } from "./../../services/carService";
import { getRandomCarIdList } from "./../../services/carService";

const SearchCar = () => {
  const [carIdList, setCarIdList] = useState([]);
  const [isResultVisible, showResult] = useState(false);

  return (
    <>
      <h2>Search Vehicle</h2>
      <button
        onClick={() => {
          const carIdList = getRandomCarIdList();
          setCarIdList(carIdList);
          showResult(true);
        }}
      >
        GET ALL CARS FOR SALE
      </button>
      <button
        onClick={() => {
          setCarIdList(Array.of(getRandomCarId()));
          showResult(true);
        }}
      >
        GET A RANDOM CAR
      </button>

      {isResultVisible && <SearchByCarId carIdList={carIdList} />}
    </>
  );
};
export default SearchCar;
