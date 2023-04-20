import React from "react";
import { useBooks } from "../context/BooksProvider";
import BookCard from "./BookCard";

function BookContainer() {
  const { books } = useBooks();
  if (books.length === 0) return null; // if no books, return nothing

  return (
    <section
      id="book-container"
      className="container w-full flex justify-center items-center"
    >
      <div className="flex flex-wrap gap-8 w-max justify-center py-8">
        {books.map((book) => {
          return <BookCard book={book} />;
        })}
      </div>
    </section>
  );
}

export default BookContainer;
