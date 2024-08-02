import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTheme from "../Hooks/useTheme";
import lightIcon from "../assets/light.svg";
import darkIcon from "../assets/dark.svg";

export default function Navbar() {
  // for search
  let [search, setSearch] = useState("");
  let navigate = useNavigate();
  let handleSearch = (e) => {
    navigate("/home/?search=" + search);
    setSearch("");
  };

  // dark & light mode
  let { isDark, changeTheme } = useTheme();
  return (
    <nav
      className={`border-b-2 ${
        isDark ? "bg-dbg border-indigo-500" : "bg-white"
      }`}
    >
      <ul className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <li className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search Book....."
            className="outline-none px-2 py-1 rounded-lg"
          />
          {/* search button */}
          <button
            onClick={handleSearch}
            className=" bg-indigo-600 rounded-2xl px-3 py-1 flex items-center gap-2 text-sm"
          >
            <span className=" text-white">Search</span>
          </button>
        </li>

        <Link
          to="/home"
          className="flex items-center md:-ml-32 gap-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 -mr-6 md:mr-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
            />
          </svg>

          <button className="text-2xl font-bold  hidden md:block text-indigo-600">
            BookStore
          </button>
        </Link>
        <li className="flex gap-3 items-center">
          <Link
            to="/create"
            className=" md:bg-indigo-600 rounded-2xl px-3 py-2 flex items-center gap-2 text-sm"
          >
            <span className="hidden md:block text-white">Create Book</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
          {/* profile */}
          <div className="w-11">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIKnDG2uXvM0N59AmTbn4zLW8RuuUwnr1CWXviX4Hpj=s96-c"
              alt=""
              className="w-full rounded-full"
            />
          </div>
          {/* light and dark mode */}
          <div className="cursor-pointer">
            {isDark && (
              <img
                src={lightIcon}
                alt=""
                className="w-8"
                onClick={() => changeTheme("light")}
              />
            )}
            {!isDark && (
              <img
                src={darkIcon}
                alt=""
                className="w-8"
                onClick={() => changeTheme("dark")}
              />
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}
