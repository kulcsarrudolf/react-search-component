import React, { useState, useEffect } from "react";

import { getRandomCarIdList } from "./../../services/carService";
import ResultNotFound from "./ResultNotFound";
import SearchCarById from "./SearchCarById";

const SearchCarByColor = (props) => {
  console.log("SearchCarByColor");

  const selectedColor = props.color;

  const [carId, setCarId] = useState(null);
  const [carIdList, setCarIdList] = useState([]);

  async function fetchCarData(selectedColor) {
    const result = await getRandomCarIdList(carId);
    setCarIdList(result);
  }

  useEffect(() => {
    setCarId(null);
    setCarIdList([]);
    fetchCarData(selectedColor);
    console.log("test");
  }, [props]);

  return (
    <>
      {carIdList.length === 0 && <ResultNotFound />}

      {carIdList.length === 1 && <SearchCarById carId={carIdList[0]} />}

      {carIdList.length > 1 && (
        <>
          <h3>List of the {selectedColor} cars</h3>
          <ul>
            {carIdList.map((carId) => (
              <li
                key={carId}
                onClick={() => {
                  setCarId(carId);
                }}
              >
                {carId}
              </li>
            ))}
          </ul>
        </>
      )}

      {carId && <SearchCarById carId={carId} />}
    </>
  );
};

export default React.memo(SearchCarByColor);
