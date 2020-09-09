import React, { useState } from "react";

import SearchCarById from "./SearchCarById";
import SearchCarByColor from "./SearchCarByColor";

const SearchCar = () => {
  const [searchingValue, setSearchingValue] = useState("");
  const [search, setSearch] = useState(null);

  const handleSearchInputChange = (e) => {
    setSearch(null);
    setSearchingValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchingValue.length === 12) {
      setSearch("SEARCH_BY_ID");
    } else {
      setSearch("SEARCH_BY_COLOR");
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
      <button onClick={handleSearchClick}>Search</button>

      {search === "SEARCH_BY_ID" && <SearchCarById carId={searchingValue} />}
      {search === "SEARCH_BY_COLOR" && (
        <SearchCarByColor
          color={searchingValue}
          selectCar={(carId) => {
            setSearchingValue(carId);
            setSearch("SEARCH_BY_ID");
          }}
        />
      )}
    </>
  );
};
export default SearchCar;
