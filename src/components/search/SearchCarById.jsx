import React, { useState, useEffect } from "react";

import ResultNotFound from "./ResultNotFound";
import Result from "./Result";

import { getCarById } from "./../../services/carService";

const SearchCarById = (props) => {
  const carId = props.carId;

  const [selectedCar, setCar] = useState(null);
  const [searchStatus, setSearchStatus] = useState(null);

  async function selectCar(carId) {
    const car = await getCarById(carId);
    if (car) {
      setCar(car);
      setSearchStatus("RESULT_FOUND");
    } else {
      setSearchStatus("RESULT_NOT_FOUND");
    }
  }

  useEffect(() => {
    setSearchStatus(null);
    selectCar(carId);
  }, [carId]);

  return (
    <>
      {searchStatus === "RESULT_NOT_FOUND" && <ResultNotFound />}
      {searchStatus === "RESULT_FOUND" && <Result car={selectedCar} />}
    </>
  );
};

export default SearchCarById;
