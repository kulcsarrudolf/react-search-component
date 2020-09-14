import React, { useState, useEffect } from "react";

import ResultNotFound from "./ResultNotFound";
import Result from "./Result";

import { getCarById } from "./../../services/carService";

const SearchCarById = ({ carId }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchCar = async () => {
      const result = await getCarById(carId);
      if (mounted) {
        setResult(result);
      }
    };

    fetchCar();

    return () => {
      mounted = false;
    };
  }, [carId]);

  if (result === null) {
    return <p data-testid="loading">Loading...</p>;
  }
  return (
    <>
      <div data-testid="result">
        {result ? <Result car={result} /> : <ResultNotFound />}
      </div>
    </>
  );
};

export default React.memo(SearchCarById);
