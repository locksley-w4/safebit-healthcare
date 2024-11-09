import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../../pages/Main";
import Homepage from "../../pages/Homepage";
import FavList from "../../pages/FavList/FavList";
import Recipes from "../../pages/Recipes/Recipes";
import Profile from "../../pages/Profile/Profile";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";

export const privateRouter = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/favlist",
          element: <FavList />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "*",
          element: <Navigate to="/" replace/>,
        },
      ]
    },
  ]);
export const publicRouter = createBrowserRouter([
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);