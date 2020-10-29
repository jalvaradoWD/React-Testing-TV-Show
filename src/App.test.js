import React from "react";
import App from "./App";

import { render } from "@testing-library/react";

test("Expected state", () => {
  const { rerender, queryAllByTestId } = render(<App />);
  // Test the lengths of all seasons
  rerender(<App />);
  expect(queryAllByTestId(/episode-individual/i)).toHaveLength(0);
});
