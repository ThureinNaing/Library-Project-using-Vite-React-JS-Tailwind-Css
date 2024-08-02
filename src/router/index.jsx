import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout/Layout";
import Create from "../pages/Create";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";
import BookDetail from "../components/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/books/:id",
        element: <BookDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
