import NotfoundError from "./pages/Errors/NotfoundError";
import Home from "./pages/Home/home";
import Login from "./pages/Login/Login";

export const ROUTERS = [
  {
    path: "/",
    passAuth: false,
    element: < Home />,
  },
  {
    path: "/about-us",
    passAuth: false,
    element: <h2> About us </h2>,
  },
  {
    path: "/login",
    passAuth: true,
    default: true,
    element: <Login/>,
  },
  {
    path: "/search-result",
    passAuth: false,
    element: <h2> Search Result </h2>,
  },
  {
    path: "*",
    passAuth: false,
    element: <NotfoundError/>,
  },
];