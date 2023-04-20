import BookContainer from "./components/BookContainer";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import BooksProvider from "./context/BooksProvider";

function App() {
  return (
    <BooksProvider>
      <Header />
      <BookContainer />
    </BooksProvider>
  );
}

export default App;
