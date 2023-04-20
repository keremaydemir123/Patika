import React from "react";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="relative w-full h-screen flex items-center justify-center">
      <img
        src="/books.jpg"
        alt="books"
        className="absolute left-0 w-full h-full object-cover"
      />
      <SearchInput />
    </header>
  );
}

export default Header;
