import React, { useState, useEffect } from "react";

import ResultNotFound from "./ResultNotFound";
import Result from "./Result";

import { getCarById } from "./../../services/carService";

const SearchCarById = (props) => {
  const carId = props.carId;

  const [result, setResult] = useState(null);

  const fetchCar = async (carId) => {
    const result = await getCarById(carId);
    setResult(result);
  };

  useEffect(() => {
    fetchCar(carId);
  }, [carId]);

  if (result) {
    return <>{result ? <Result car={result} /> : <ResultNotFound />}</>;
  }

  return <p>Loading...</p>;
};

export default React.memo(SearchCarById);
