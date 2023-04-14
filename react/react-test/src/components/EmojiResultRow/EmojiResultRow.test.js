import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiResultsRow from ".";
import SearchInput from "../SearchInput";

it("copies the emoji to the clipboard when clicked", () => {
  const emoji = {
    title: "Tada",
    symbol: "🎉",
  };
  render(<EmojiResultsRow {...emoji} />);
  render(<SearchInput textChange={handleChange} />);

  function handleChange(event) {
    // after emoji is pasted into input, this function is called
    const text = event.target.value;
    expect(text).toBe("🎉");
  }
  // get emoji button
  const emojiButton = document.querySelector(".component-emoji-result-row");
  // click emoji button
  userEvent.click(emojiButton);
  // get input
  const inputText = screen.getByRole("textbox");
  // paste emoji into input
  userEvent.paste(inputText, emoji.symbol);
});
