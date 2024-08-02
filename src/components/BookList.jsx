import Books from "../assets/english.jpg";
import useFetch from "../Hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import useTheme from "../Hooks/useTheme";

export default function BookList() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);

  let search = params.get("search");

  let {
    data: books,
    loading,
    error,
  } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ""}`);

  if (error) {
    <p>{error}</p>;
  }

  let { isDark } = useTheme();

  return (
    <div>
      {loading && <p>Loading.......</p>}
      {/* Books list */}
      {!!books && (
        <div className="grid grid-flow-row gap-4 grid-cols-2 md:grid-cols-4 my-3 ">
          {books.map((book) => (
            <Link to={`/books/${book.id}`} key={book.id}>
              <div
                className={`p-4 border border-1 min-h-[420px] ${
                  isDark ? "bg-dcard border-indigo-500 text-white" : ""
                }`}
                key={book.id}
              >
                <img src={Books} alt="" />
                <div className="text-center space-y-3 p-3 ">
                  <h1>{book.title}</h1>
                  <p>{book.dsecription}</p>
                  <div className="flex flex-wrap">
                    {book.categories.map((c) => (
                      <span
                        key={c}
                        className="mx-1 my-1  px-2 py-1 rounded-full text-white bg-blue-500"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {books && !books.length && (
        <p className="text-center text-xl text-gray-500">
          Search Result Not Found
        </p>
      )}
    </div>
  );
}
