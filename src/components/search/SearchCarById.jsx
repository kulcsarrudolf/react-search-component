import React, { useState, useEffect } from "react";

import ResultNotFound from "./ResultNotFound";
import Result from "./Result";

import { getCarById } from "./../../services/carService";

const SearchCarById = (props) => {
  console.log("SearchCarById");

  const carId = props.carId;

  const [result, setResult] = useState(null);

  async function fetchCar(carId) {
    const result = await getCarById(carId);
    setResult(result);
  }

  useEffect(() => {
    fetchCar(carId);
  }, [carId]);

  if (result) {
    return <Result car={result} />;
  }

  return <ResultNotFound />;
};

// export default SearchCarById;
export default React.memo(SearchCarById);
