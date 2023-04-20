import { createContext, useContext, useState } from "react";
import { Book } from "../types";

interface IBookContext {
  books: Book[];
  loading: boolean;
  error: string;
  getAllBooks: (search: string) => void;
}

interface IBookProvider {
  children: React.ReactNode;
}

export const BooksContext = createContext<IBookContext>({} as IBookContext);

export const useBooks = () => useContext(BooksContext);

export default function BooksProvider({ children }: IBookProvider) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const apiURL = "https://www.googleapis.com/books/v1/volumes";
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API;

  function getAllBooks(search: string): void {
    if (!search) {
      setError("Please enter a search term");
      return;
    }
    setLoading(true);
    const getURL = `${apiURL}?key=${apiKey}&langRestrict=en&maxResults=40&orderBy=relevance&q=${search}`;

    fetch(getURL)
      .then((res) => res.json())
      .then((data) => {
        const books: Book[] = data.items.map((book: any) => {
          const bookData = {
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors
              ? book.volumeInfo.authors[0]
              : "Unknown",
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            infoLink: book.volumeInfo.infoLink,
            previewLink: book.volumeInfo.previewLink,
            publishedDate: book.volumeInfo.publishedDate,
            publisher: book.volumeInfo.publisher,
          };

          return bookData;
        });
        setBooks(books);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  return (
    <BooksContext.Provider value={{ books, loading, error, getAllBooks }}>
      {children}
    </BooksContext.Provider>
  );
}
