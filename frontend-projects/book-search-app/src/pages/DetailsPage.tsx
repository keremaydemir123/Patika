import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Book } from "../types";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Loading from "../components/Loading";
import UTurnIcon from "../icons/UTurnIcon";

function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const book: Book = {
          id: data.id,
          title: data.volumeInfo.title,
          author: data.volumeInfo.authors
            ? data.volumeInfo.authors[0]
            : "Unknown",
          description: data.volumeInfo.description,
          image: data.volumeInfo.imageLinks.thumbnail,
          infoLink: data.volumeInfo.infoLink,
          previewLink: data.volumeInfo.previewLink,
          publishedDate: data.volumeInfo.publishedDate,
          publisher: data.volumeInfo.publisher,
        };

        setBook(book);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container w-full flex justify-center py-6">
      <div className="prose prose-slate max-w-4xl">
        <Link
          to="/"
          className="flex items-center gap-2 bg-slate-800 text-slate-200 w-max px-3 py-1 rounded-lg no-underline hover:bg-slate-700 hover:no-underline mb-4"
        >
          <UTurnIcon />
          Back
        </Link>
        <h1 className=" text-slate-800 my-3">{book?.title}</h1>
        <h2 className=" text-slate-700 my-3">-{book?.author}</h2>
        <div className="flex items-start justify-center gap-8">
          <div className="flex-[3]">
            <img
              src={book?.image}
              alt={book?.title}
              className="w-full object-contain mb-2"
            />
            <div className="flex justify-evenly w-full text-sm uppercase">
              <a
                href={book?.infoLink}
                target="_blank"
                className="no-underline text-slate-600"
              >
                Info
              </a>
              <a
                href={book?.previewLink}
                target="_blank"
                className="no-underline text-slate-600"
              >
                Preview
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-[5]">
            <ReactMarkdown
              children={book?.description!}
              rehypePlugins={[rehypeRaw]}
            />
            <div>
              <strong>Publisher: </strong> {book?.publisher}
            </div>
            <div>
              <strong>Publish Date: </strong> {book?.publishedDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
