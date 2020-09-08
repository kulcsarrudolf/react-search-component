import React, { useState, useEffect } from "react";

import ResultNotFound from "./ResultNotFound";
import MultipleResultFound from "./MultipleResultFound";
import Result from "./Result";

import { getRandomCarData } from "./../../services/carService";

const SearchByCarId = (props) => {
  const carIdList = props.carIdList;
  const carIdListLength = carIdList.length;

  const [selectedCar, setCar] = useState(null);
  const [resultState, setResultState] = useState(null);

  useEffect(() => {
    if (carIdListLength === 0) {
      setCar(null);
      setResultState("RESULT_NOT_FOUND");
    } else if (carIdListLength === 1) {
      const car = getRandomCarData(carIdList[0]);
      setCar(car);
      setResultState("RESULT");
    } else {
      setCar(null);
      setResultState("MULTIPLE_RESULT");
    }
  }, [carIdList, carIdListLength]);

  return (
    <>
      {resultState === "RESULT_NOT_FOUND" && <ResultNotFound />}

      {resultState === "RESULT" && <Result car={selectedCar} />}

      {resultState === "MULTIPLE_RESULT" && (
        <MultipleResultFound
          carIdList={carIdList}
          selectCar={(carId) => {
            const car = getRandomCarData(carId);
            setCar(car);
            setResultState("RESULT");
          }}
        />
      )}
    </>
  );
};

export default SearchByCarId;
