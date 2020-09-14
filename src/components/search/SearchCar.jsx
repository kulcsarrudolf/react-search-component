import React, { useState } from "react";

import SearchCarById from "./SearchCarById";
import SearchCarByProperty from "./SearchCarByProperty";

import { isValidInput } from "./../../utils/carValidation";
import { getSearchType } from "./../../utils/carValidation";

import { getAllCarsByColor } from "./../../services/carService";
import { getAllCarsByMaker } from "./../../services/carService";

const SearchCar = () => {
  const [searchingValue, setSearchingValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const [searchButtonDisabled, disableSearchButton] = useState(true);
  const [searchType, setSearchType] = useState(null);

  const disableSearchButtonCondition = (searchValue) => {
    return !isValidInput(searchValue);
  };

  const handleSearchInputChange = (e) => {
    disableSearchButton(disableSearchButtonCondition(e.target.value));
    setFilterValue(e.target.value);
  };

  const handleSearchClick = () => {
    disableSearchButton(true);
    setSearchingValue(filterValue);
    setSearchType(getSearchType(filterValue));
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
          <SearchCarByProperty
            property={"color"}
            propertyValue={searchingValue}
            callback={getAllCarsByColor}
          />
        )}

        {searchType === "SEARCH_BY_MAKER" && (
          <SearchCarByProperty
            property={"maker"}
            propertyValue={searchingValue}
            callback={getAllCarsByMaker}
          />
        )}
      </div>
    </>
  );
};
export default SearchCar;
