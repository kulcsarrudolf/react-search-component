import React, { useState, useEffect } from "react";

import { getAllCarsByColor } from "./../../services/carService";
import ResultNotFound from "./ResultNotFound";
import SearchCarById from "./SearchCarById";

const SearchCarByColor = (props) => {
  console.log("SearchCarByColor");

  const selectedColor = props.color;

  const [result, setResult] = useState(null);

  const fetchCarData = async (selectedColor) => {
    const result = await getAllCarsByColor(selectedColor);
    setResult(result);
  };

  useEffect(() => {
    setResult(null);
    fetchCarData(props.color);
  }, [props]);

  if (result) {
    const resultLength = result.length;
    return (
      <>
        {resultLength === 0 && <ResultNotFound />}

        {resultLength === 1 && <SearchCarById carId={result[0]} />}

        {resultLength > 1 && (
          <MultipleResult
            result={result}
            color={selectedColor}
            selecctCarId={setResult}
          />
        )}
      </>
    );
  }

  return <p>Loading ...</p>;
};

const MultipleResult = (props) => {
  const selectCarId = (carId) => {
    props.selecctCarId(carId);
  };
  const result = props.result;
  const color = props.color;

  return (
    <>
      <h3>List of the {color} cars</h3>
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

export default React.memo(SearchCarByColor);
