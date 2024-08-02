import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { useEffect } from "react";
import bookImg from "../assets/english.jpg";
import useTheme from "../Hooks/useTheme";

export default function BookDetail() {
  let param = useParams();
  let url = "http://localhost:3000/books/" + param.id;
  let { data: book, error, loading } = useFetch(url);
  let navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/home");
    }
  }, [error, navigate]);

  // dark mode
  let { isDark } = useTheme();

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading now......</p>}
      {book && (
        <div
          className={`grid grid-cols-2 h-screen ${isDark ? "text-white" : ""}`}
        >
          <div>
            <img src={bookImg} alt="" className="w-[80%]" />{" "}
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold ">{book.title}</h1>
            <div className="space-x-3 ">
              {book.categories.map((category) => (
                <span
                  key={category}
                  className="bg-blue-500 rounded-full text-white text-sm py-1 px-2 "
                >
                  {category}
                </span>
              ))}
            </div>
            <p>{book.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
