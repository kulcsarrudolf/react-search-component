import React from "react";

import { getRandomCarIdList } from "./../../services/carService";

const SearchCarByColor = (props) => {
  const carIdList = getRandomCarIdList();
  const selectedColor = props.color;
  const selectCar = props.selectCar;

  return (
    <>
      <h3>List of the {selectedColor} cars</h3>
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

export default React.memo(SearchCarByColor);
