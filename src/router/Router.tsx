import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main.tsx";
import App from "../App.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [],
      },
    ],
  },
]);

export default Router;
