import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFoundPage";

const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFoundPage />,
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
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");
    console.log(isAuth);
  }, []);
  // return <div className="App">{isAuth ? <Login /> : <Signup />}</div>;
  return (
    <>
      <RouterProvider router={isAuth ? privateRouter : publicRouter} />
    </>
  );
}

export default App;
