import { Link } from "react-router-dom";
import { Book } from "../types";

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col w-56 p-2 gap-2">
      <div className="w-full h-80">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-evenly items-center uppercase text-xs text-gray-500 font-semibold">
        <a href={book.previewLink} target="_blank">
          Preview
        </a>
        <a href={book.infoLink} target="_blank">
          info
        </a>
        <Link to={`/book/${book.id}`}>Details</Link>
      </div>
      <div className="w-full">
        <h2 className="text-sm font-semibold text-gray-900">{book.title}</h2>
        <p className="text-sm text-gray-600">{book.author}</p>
      </div>
    </div>
  );
}

export default BookCard;
