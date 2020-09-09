import { isValidCarId } from "./carValidation";
import { isValidCarColor } from "./carValidation";
import { isValidInput } from "./carValidation";

import { COLOURS } from "./../services/carService";

test("Test if the given carId is valid.", () => {
  const validTestCarIdList = ["AB0123456789", "AB9876543210", "XX0000000000"];

  validTestCarIdList.forEach((testCarId) => {
    const isTestCarIdValid = isValidCarId(testCarId);

    expect(isTestCarIdValid).toBe(true);
  });
});

test("Test if the given carId is invalid.", () => {
  const invalidTestCarIdList = [
    "0123456789AB",
    "AB23456789AB",
    "ABC3456789AB",
    "AB98765432100",
    "XXX000000000",
    "XX00000000",
    "XX00000000000",
    "XXX000000000",
  ];

  invalidTestCarIdList.forEach((testCarId) => {
    const isTestCarIdValid = isValidCarId(testCarId);

    expect(isTestCarIdValid).toBe(false);
  });
});

test("Test if the given color is a valid car color", () => {
  COLOURS.forEach((color) => {
    expect(isValidCarColor(color)).toBe(true);
  });
});

test("Test valid input values", () => {
  const validInputValues = [
    "RED",
    "AB0123456789",
    "BLUE",
    "RED",
    "AB9876543210",
  ];

  validInputValues.forEach((inputValue) => {
    expect(isValidInput(inputValue)).toBe(true);
  });
});
