import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./components/root";
import Home from "./pages/home";
import Blog from "./pages/blog";
import NotFound from "./components/notFound";
import ReadPost from "./pages/readPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <ReadPost />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
