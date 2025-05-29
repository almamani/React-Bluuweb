import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layout/LayoutPublic";
import LayoutPrivate from "../layout/LayoutPrivate";
import Home from "../views/Home";
import Clase1 from "../views/Clase1";
import Clase2 from "../views/Clase2";
import Clase3 from "../views/Clase3";
import Clase4 from "../views/Clase4";
import Clase5, { loaderBlog } from "../views/Clase5";
import Clase6 from "../views/Clase6";
import Clase7 from "../views/Clase7";

import Post from "../components/Post";
import { loaderPost } from "../components/Post";
import NotFound from "../views/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/clase1",
            element: <Clase1 />,
          },
          {
            path: "/clase2",
            element: <Clase2 />,
          },
          {
            path: "/clase3",
            element: <Clase3 />,
          },
          {
            path: "/clase4",
            element: <Clase4 />,
          },
          {
            path: "/clase5",
            element: <Clase5 />,
            loader: loaderBlog,
          },
          {
            path: "/clase5/:id",
            element: <Post />,
            loader: loaderPost,
          },
          {
            path: "/clase6",
            element: <LayoutPrivate />,
            children: [
              {
                index: true,
                element: <Clase6 />,
              },
            ],
          },
          {
            path: "/clase7/",
            element: <Clase7 />,
          },
        ],
      },
    ],
  },
]);
