export const COLOURS = [
  "BLACK",
  "BROWN",
  "GRAY",
  "WHITE",
  "YELLOW",
  "ORANGE",
  "RED",
  "PINK",
  "PURPLE",
  "BLUE",
  "GREEN",
];

const CAR_MAKERS = [
  "AUDI",
  "BMW",
  "VW",
  "Tesla",
  "Mercedes",
  "Porsche",
  "Volvo",
  "Alfa Romeo",
  "Dacia",
];

export const isValidCarId = (id) => {
  const regex = RegExp("([A-Za-z]{2}[0-9]{10})$");
  return regex.test(id);
};

export const isValidCarColor = (color) => {
  return COLOURS.includes(color);
};

export const isValidCarMaker = (maker) => {
  return CAR_MAKERS.includes(maker);
};

export const getSearchType = (searchValue) => {
  if (isValidCarId(searchValue)) {
    return "SEARCH_BY_ID";
  } else if (isValidCarColor(searchValue)) {
    return "SEARCH_BY_COLOR";
  } else if (isValidCarMaker(searchValue)) {
    return "SEARCH_BY_MAKER";
  } else {
    return null;
  }
};

export const isValidInput = (input) => {
  return (
    isValidCarId(input) || isValidCarColor(input) || isValidCarMaker(input)
  );
};
