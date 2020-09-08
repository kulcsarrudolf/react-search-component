import React, { useState, useEffect } from "react";

import ResultNotFound from "./ResultNotFound";
import MultipleResultFound from "./MultipleResultFound";
import Result from "./Result";

import { getCarById } from "./../../services/carService";

const SearchCarById = (props) => {
  const carIdList = props.carIdList;
  const carIdListLength = carIdList.length;

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
    if (carIdListLength === 0) {
      setSearchStatus("RESULT_NOT_FOUND");
    } else if (carIdListLength === 1) {
      setSearchStatus(null);
      selectCar(carIdList[0]);
    } else {
      setSearchStatus("MULTIPLE_RESULT");
    }
  }, [carIdList, carIdListLength]);

  return (
    <>
      {searchStatus === "RESULT_NOT_FOUND" && <ResultNotFound />}

      {searchStatus === "RESULT_FOUND" && <Result car={selectedCar} />}

      {searchStatus === "MULTIPLE_RESULT" && (
        <MultipleResultFound
          carIdList={carIdList}
          selectCar={(carId) => {
            selectCar(carId);
          }}
        />
      )}
    </>
  );
};

export default SearchCarById;
