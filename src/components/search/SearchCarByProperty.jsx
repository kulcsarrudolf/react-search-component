import React, { useState, useEffect } from "react";

import ResultNotFound from "./ResultNotFound";
import SearchCarById from "./SearchCarById";

const SearchCarByProperty = ({ property, propertyValue, callback }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);

    const fetchCarData = async () => {
      const result = await callback(propertyValue);
      setResult(result);
    };

    fetchCarData();
  }, [property, propertyValue, callback]);

  if (result) {
    const resultLength = result.length;
    return (
      <>
        {resultLength === 0 && <ResultNotFound />}

        {resultLength === 1 && <SearchCarById carId={result[0]} />}

        {resultLength > 1 && (
          <MultipleResult
            result={result}
            propertyValue={propertyValue}
            selectCarId={setResult}
          />
        )}
      </>
    );
  }

  return <p>Loading ...</p>;
};

const MultipleResult = (props) => {
  const selectCarId = (carId) => {
    props.selectCarId(carId);
  };
  const result = props.result;
  const propertyValue = props.propertyValue;

  return (
    <>
      <h3>List of the {propertyValue} cars</h3>
      <ul>
        {result.map((carId) => (
          <li
            key={carId}
            onClick={() => {
              selectCarId(Array.of(carId));
            }}
          >
            {carId}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchCarByProperty;
