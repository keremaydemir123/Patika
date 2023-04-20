import { useEffect, useState } from "react";
import { useBooks } from "../context/BooksProvider";
import Loading from "./Loading";
import SearchIcon from "../icons/SearchIcon";

export default function SearchInput() {
  const [search, setSearch] = useState<string>("");
  const { getAllBooks, error, loading } = useBooks();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getAllBooks(search);
  };

  useEffect(() => {
    if (!loading) {
      scrollToBookContainer();
    }
  }, [loading]);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">{error}</p>;

  const scrollToBookContainer = () => {
    // scroll to book container
    const bookContainer = document.getElementById("book-container");
    bookContainer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center rounded-lg overflow-hidden h-16 w-96 bg-blue-100"
    >
      <input
        type="text"
        placeholder="Search Books"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 outline-none border-none h-full px-4 text-lg text-gray-800"
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-gray-600 px-4 h-full"
        disabled={loading}
      >
        <SearchIcon />
      </button>
    </form>
  );
}
