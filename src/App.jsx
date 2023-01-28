import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./components/root";
import Home from "./pages/home";
import Blog from "./pages/blog";
import NotFound from "./components/notFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
