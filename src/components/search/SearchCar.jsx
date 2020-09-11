import React, { useState } from "react";

import SearchCarById from "./SearchCarById";
import SearchCarByColor from "./SearchCarByColor";

import { isValidCarId } from "./../../utils/carValidation";
import { isValidCarColor } from "./../../utils/carValidation";
import { isValidInput } from "./../../utils/carValidation";

const SearchCar = () => {
  console.log("SearchCar");

  const [searchingValue, setSearchingValue] = useState("");
  const [validSearchingValue, setValidSearchingValue] = useState(null);
  const [searchButtonDisabled, disableSearchButton] = useState(true);
  const [searchType, setSearchType] = useState(null);

  const handleSearchInputChange = (e) => {
    setSearchingValue(e.target.value);

    if (isValidInput(e.target.value)) {
      disableSearchButton(false);
    } else {
      disableSearchButton(true);
    }
  };

  const handleSearchClick = () => {
    disableSearchButton(true);
    setValidSearchingValue(searchingValue);

    if (isValidCarId(searchingValue)) {
      setSearchType("SEARCH_BY_ID");
    } else if (isValidCarColor(searchingValue)) {
      setSearchType("SEARCH_BY_COLOR");
    } else {
      setSearchType(null);
    }
  };

  return (
    <>
      <h2>Search Vehicle</h2>

      <input
        type="text"
        onChange={handleSearchInputChange}
        value={searchingValue}
      />

      <button disabled={searchButtonDisabled} onClick={handleSearchClick}>
        Search
      </button>

      <div className="search-area">
        {searchType === "SEARCH_BY_ID" && (
          <SearchCarById carId={validSearchingValue} />
        )}

        {searchType === "SEARCH_BY_COLOR" && (
          <SearchCarByColor color={validSearchingValue} />
        )}
      </div>
    </>
  );
};
export default SearchCar;
