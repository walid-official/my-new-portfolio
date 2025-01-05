import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import DetailsProject from "../pages/DetailsProject";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "DetailsProject/:id",
          element: <DetailsProject></DetailsProject>
        }
      ]
    },
  ]);

  export default router
  