import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./button";

test("Button renders children", () => {
  const { getByText } = render(<Button appName="UI">Click me</Button>);
  expect(getByText("Click me")).toBeInTheDocument();
});
