import React, { useState } from "react";

import SearchCarById from "./SearchCarById";
import MultipleResultFound from "./MultipleResultFound";

import { getRandomCarId } from "./../../services/carService";
import { getRandomCarIdList } from "./../../services/carService";

const SearchCar = () => {
  const [carIdList, setCarIdList] = useState([]);

  return (
    <>
      <h2>Search Vehicle</h2>
      <button
        onClick={() => {
          const carIdList = getRandomCarIdList();
          setCarIdList(carIdList);
        }}
      >
        GET ALL CARS FOR SALE
      </button>
      <button
        onClick={() => {
          setCarIdList(Array.of(getRandomCarId()));
        }}
      >
        GET A RANDOM CAR
      </button>

      {carIdList.length === 1 && <SearchCarById carId={carIdList[0]} />}
      {carIdList.length > 1 && <MultipleResultFound carIdList={carIdList} />}
    </>
  );
};
export default SearchCar;
