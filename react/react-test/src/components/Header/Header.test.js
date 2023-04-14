import React from "react";
import { screen, render } from "@testing-library/react";

import Header from "../Header";

it("renders without crashing", () => {
  render(<Header />);
  // check that the header is rendered with the correct text
  expect(screen.getByText("Emoji Search"));
});
