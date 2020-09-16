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

  expect(resultDiv).toHaveTextContent("red");
});

it("blue", async () => {
  const { getByTestId, getByLabelText } = render(<TestComponent />);

  const input = getByTestId("color-input");
  //   const input = getByLabelText("color");
  console.log(input);
  //   const input = await waitForElement(() => getByTestId("color-input"));

  fireEvent.change(input, { target: { value: "blue" } });

  const resultDiv = await waitForElement(() => getByTestId("result"));

  expect(resultDiv).toHaveTextContent("blue");
});
