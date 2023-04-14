import React from "react";
import { render } from "@testing-library/react";

import EmojiResults from "./index";
import filterEmoji from "../../filterEmoji";

it("lists all rows on mount", () => {
  // render the component and check the number of rows
  render(<EmojiResults emojiData={filterEmoji("", 20)} />);
  const rows = document.querySelectorAll(".component-emoji-result-row");
  expect(rows.length).toBe(20);
});

it("rerenders if filter changes", () => {
  // render the component
  const { rerender } = render(<EmojiResults emojiData={filterEmoji("", 20)} />);
  // get all titles
  let titles = document.querySelectorAll(
    ".component-emoji-result-row > .title"
  );
  // convert to a set
  titles = new Set(Array.from(titles).map((title) => title.textContent));
  // check that "Tada" is not in the set at initial render
  expect(titles.has("Tada")).toBe(false);
  // rerender with a new filter
  rerender(<EmojiResults emojiData={filterEmoji("party", 20)} />);
  // get all titles
  titles = document.querySelectorAll(".component-emoji-result-row > .title");
  titles = new Set(Array.from(titles).map((title) => title.textContent));
  // check that "Tada" is in the set after rerender
  expect(titles.has("Tada")).toBe(true);
});
