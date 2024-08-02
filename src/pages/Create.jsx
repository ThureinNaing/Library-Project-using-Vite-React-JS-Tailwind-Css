import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch.js";
import { useNavigate } from "react-router-dom";
import useTheme from "../Hooks/useTheme.js";

export default function Create() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [newCategory, setNewCategory] = useState("");
  let [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  //usefetch for addBook
  let { setPostData, data: book } = useFetch(
    "http://localhost:3000/books",
    "POST"
  );

  //add category
  let addCategory = () => {
    // prevent for double adding
    setNewCategory("");
    if (newCategory && categories.includes(newCategory)) {
      return;
    }
    setCategories((prev) => [newCategory, ...prev]);
  };

  //addbook function
  let addBook = (e) => {
    e.preventDefault();
    let data = {
      title,
      description,
      categories,
    };
    setPostData(data);
  };

  //useEffect
  useEffect(() => {
    if (book) {
      navigate("/home");
    }
  }, [book, navigate]);
  // for dark mode
  let { isDark } = useTheme();

  return (
    <div className="h-screen">
      <form className="w-full max-w-lg mx-auto mt-5" onSubmit={addBook}>
        {/* title */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="book-title"
            >
              Book title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="book-title"
              type="text"
              placeholder="Book title"
            />
          </div>
        </div>

        {/* description */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="book-description"
            >
              Book description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-20 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="book-description"
              type="text"
              placeholder="Book description"
            />
          </div>
        </div>

        {/* category */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${
                isDark ? "text-white" : ""
              }`}
              htmlFor="book-category"
            >
              Book categories
            </label>

            <div className="flex justify-center items-center space-x-2">
              <input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="book-category"
                type="text"
                placeholder="Book category"
              />
              <button
                type="button"
                className="bg-indigo-500 p-1 rounded-lg mb-3"
                onClick={addCategory}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* new categories */}
          <div className="flex flex-wrap">
            {categories.map((c) => (
              <span
                key={c}
                className="mx-1 my-1  px-2 py-1 rounded-full text-white bg-indigo-600"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* button */}
        <button className=" md:bg-indigo-600 rounded-2xl px-3 py-2 flex items-center justify-center w-full  gap-2 text-sm ">
          <span className="hidden md:block text-white">Create Book</span>
        </button>
      </form>
    </div>
  );
}
