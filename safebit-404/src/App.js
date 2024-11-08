import { useEffect, useState } from "react";
import styles from "./index.css"
import Nav from "./components/ui/Nav/Nav";
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup";
import { createBrowserRouter, Navigate, Router, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import FavList from "./pages/FavList/FavList";
import Recipes from "./pages/Recipes/Recipes";
import Profile from "./pages/Profile/Profile";

const privateRouter = createBrowserRouter([
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
const publicRouter = createBrowserRouter([
  {
    path: "*",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

localStorage.setItem("isAuth", "true");
// localStorage.clear("isAuth");

function App() {
  let [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");
    setIsLoading(false)
  }, []);

  // return <div className="App">{isAuth ? <Login /> : <Signup />}</div>;
  
  if(isLoading) return <>Loading..</>

  return (
    <>
      <RouterProvider router={isAuth ? privateRouter : publicRouter} />
    </>
  );
}

export default App;
