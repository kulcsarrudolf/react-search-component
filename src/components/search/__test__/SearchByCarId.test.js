import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SearchCarById from "./../SearchCarById";

import { getCarById } from "./../../../services/carService";

const testCarId = "AB0123456789";

jest.mock("./../../../services/carService", () => ({
  getCarById: jest.fn().mockResolvedValue({}),
}));

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

it("no result", async () => {
  getCarById.mockResolvedValueOnce(false);

  const { getByTestId } = render(<SearchCarById carId={testCarId} />);

  expect(getByTestId("loading")).toHaveTextContent("Loading...");

  const resultDiv = await waitForElement(() => getByTestId("result"));

  expect(resultDiv).toHaveTextContent("Result Not Found");
  expect(getCarById).toHaveBeenCalledTimes(1);
  expect(getCarById).toHaveBeenCalledWith(testCarId);
});

it("result found", async () => {
  getCarById.mockResolvedValueOnce({
    id: "AB0123456789",
    maker: "AUDI",
    color: "BLUE",
  });

  const { getByTestId } = render(<SearchCarById carId={testCarId} />);

  expect(getByTestId("loading")).toHaveTextContent("Loading...");

  const resultDiv = await waitForElement(() => getByTestId("result"));

  expect(resultDiv).toHaveTextContent("Result Found");
  expect(resultDiv).toHaveTextContent("Car ID: AB0123456789");
  expect(resultDiv).toHaveTextContent("Car maker: AUDI");
  expect(resultDiv).toHaveTextContent("Car color: BLUE");

  expect(getCarById).toHaveBeenCalledTimes(1);
  expect(getCarById).toHaveBeenCalledWith(testCarId);
});
