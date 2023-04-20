import BookContainer from "../components/BookContainer";
import Header from "../components/Header";
import BooksProvider from "../context/BooksProvider";

function HomePage() {
  return (
    <>
      <Header />
      <BookContainer />
    </>
  );
}

export default HomePage;
