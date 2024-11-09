import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { privateRouter, publicRouter } from "./components/router/router";

const queryClient = new QueryClient();

localStorage.setItem("isAuth", "true");
// localStorage.clear("isAuth");

function App() {
  let [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");
    setIsLoading(false);
  }, []);

  // return <div className="App">{isAuth ? <Login /> : <Signup />}</div>;

  if (isLoading) return <>Loading..</>;

  return (
    <>
      <RouterProvider router={isAuth ? privateRouter : publicRouter} />
    </>
  );
}

export default App;
