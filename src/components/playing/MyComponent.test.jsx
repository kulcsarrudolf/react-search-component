import React from "react";

import {
  render,
  fireEvent,
  waitForElement,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TestComponent from "./MyComponent";

it("red", async () => {
  const { getByTestId } = render(<TestComponent />);

  const resultDiv = await waitForElement(() => getByTestId("result"));

  expect(resultDiv).toHaveTextContent("");
});

it("blue", async () => {
  const { getByTestId } = render(<TestComponent />);

  const input = getByTestId("blue-radio-button");
  fireEvent.click(input);

  const resultDiv = await waitForElement(() => getByTestId("result"));
  expect(resultDiv).toHaveTextContent("You selected blue!");
});

it("white", async () => {
  const { getByTestId } = render(<TestComponent />);

  const input = getByTestId("yellow-radio-button");
  fireEvent.click(input);

  const resultDiv = await waitForElement(() => getByTestId("result"));
  expect(resultDiv).toHaveTextContent("You selected yellow!");
});
