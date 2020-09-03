import React, { useState } from "react";
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
        IMSI
      </button>
      <button
        onClick={() => {
          setCarIdList(Array.of(getRandomCarId()));
          showResult(true);
        }}
      >
        VIN
      </button>
    </>
  );
};
export default SearchCar;
