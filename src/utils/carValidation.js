import { COLOURS } from "./../services/carService";

export const isValidCarId = (id) => {
  const regex = RegExp("([A-Za-z]{2}[0-9]{10})$");
  return regex.test(id);
};

export const isValidCarColor = (color) => {
  return COLOURS.includes(color);
};

export const isValidInput = (input) => {
  return isValidCarId(input) || isValidCarColor(input);
};
