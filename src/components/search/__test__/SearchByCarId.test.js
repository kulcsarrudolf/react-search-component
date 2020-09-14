import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SearchCarById from "./../SearchCarById";

import carServiceMock from "./__mocks__/carServiceMock";

const testCarId = "AB0123456789";

afterEach(cleanup);

it("no result", async () => {
  carServiceMock.getCarById.mockResolvedValueOnce(false);

  const { getByTestId } = render(<SearchCarById carId={testCarId} />);

  expect(getByTestId("loading")).toHaveTextContent("Loading...");

  const resultDiv = await waitForElement(() => getByTestId("result"));

  expect(resultDiv).toHaveTextContent("Result Not Found");
  expect(carServiceMock.getCarById).toHaveBeenCalledTimes(1);
  expect(carServiceMock.getCarById).toHaveBeenCalledWith(testCarId);
});

it("result found", async () => {
  carServiceMock.getCarById.mockResolvedValueOnce({
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

  expect(carServiceMock.getCarById).toHaveBeenCalledTimes(1);
  expect(carServiceMock.getCarById).toHaveBeenCalledWith(testCarId);
});
