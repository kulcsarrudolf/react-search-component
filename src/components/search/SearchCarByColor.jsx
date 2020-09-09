import React from "react";

import { getRandomCarIdList } from "./../../services/carService";

const SearchCarByColor = (props) => {
  const carIdList = getRandomCarIdList();
  const selectCar = props.selectCar;
  return (
    <>
      <h3>Select one to continue.</h3>
      <ul>
        {carIdList.map((carId) => (
          <li
            key={carId}
            onClick={() => {
              selectCar(carId);
            }}
          >
            {carId}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchCarByColor;
