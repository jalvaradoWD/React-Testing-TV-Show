import React from "react";

import Episodes from "./Episodes";

import { cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { season1, season2, season4, season3 } from "./dummyData";

jest.mock("../api/fetchShow");

afterAll(() => {
  cleanup();
});

test("Renders the empty episode list", () => {
  const { rerender, getByTestId, getAllByTestId } = render(
    <Episodes episodes={[]} />
  );

  // The episode list is rendered and is expected to be empty
  const episodeList = getByTestId(/episode-list/i);
  expect(episodeList).toBeVisible();
  expect(episodeList).toBeEmptyDOMElement();
});

test("Checks the length of all episodes in each season", async () => {
  const { getAllByTestId, rerender } = render(<Episodes episodes={season1} />);

  await waitFor(() =>
    expect(getAllByTestId(/episode-individual/i)).toHaveLength(8)
  );

  rerender(<Episodes episodes={season2} />);
  await waitFor(() =>
    expect(getAllByTestId(/episode-individual/i)).toHaveLength(9)
  );

  rerender(<Episodes episodes={season3} />);
  await waitFor(() =>
    expect(getAllByTestId(/episode-individual/i)).toHaveLength(8)
  );

  rerender(<Episodes episodes={season4} />);
  await waitFor(() =>
    expect(getAllByTestId(/episode-individual/i)).toHaveLength(3)
  );
});
