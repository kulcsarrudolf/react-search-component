import React, { useState } from "react";

import SearchCarById from "./SearchCarById";
import SearchCarByColor from "./SearchCarByColor";

import { isValidInput } from "./../../utils/carValidation";
import { getSearchType } from "./../../utils/carValidation";

const SearchCar = () => {
  console.log("SearchCar");

  const [currentSearchingValue, setCurrentSearchingValue] = useState("");
  const [searchingValue, setSearchingValue] = useState("");

  const [searchButtonDisabled, disableSearchButton] = useState(true);
  const [searchType, setSearchType] = useState(null);

  const disableSearchButtonCondition = (searchValue) => {
    return !isValidInput(searchValue);
  };

  const handleSearchInputChange = (e) => {
    disableSearchButton(disableSearchButtonCondition(e.target.value));
    setCurrentSearchingValue(e.target.value);
  };

  const handleSearchClick = () => {
    disableSearchButton(true);

    setSearchType(getSearchType(currentSearchingValue));
    setSearchingValue(currentSearchingValue);
  };

  return (
    <>
      <h2>Search Vehicle</h2>

      <input type="text" onChange={handleSearchInputChange} />

      <button disabled={searchButtonDisabled} onClick={handleSearchClick}>
        Search
      </button>

      <div className="search-area">
        {searchType === "SEARCH_BY_ID" && (
          <SearchCarById carId={searchingValue} />
        )}
        {searchType === "SEARCH_BY_COLOR" && (
          <SearchCarByColor color={searchingValue} />
        )}

        {searchType === "SEARCH_BY_MAKER" && (
          <p>Comming soon! Not implemented yet!</p>
        )}
      </div>
    </>
  );
};
export default SearchCar;
