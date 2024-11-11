import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { privateRouter, publicRouter } from "./components/router/router";
import { AuthContext, UserContext } from "./context/context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
// localStorage.setItem("isAuth", "true");
// localStorage.clear("isAuth");

function App() {
  let [isAuth, setIsAuth] = useState(false);
  let [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const grantAccess = () => {
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
  };
  const updateUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(user);
  };
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth") === "true");
    if (localStorage.getItem("user")) setUser(JSON.parse(localStorage.getItem("user")));
    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  // return <div className="App">{isAuth ? <Login /> : <Signup />}</div>;

  if (isLoading) return <>Loading..</>;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ user, updateUser }}>
          <AuthContext.Provider value={{ isAuth, grantAccess }}>
            <RouterProvider router={isAuth ? privateRouter : publicRouter} />
          </AuthContext.Provider>
        </UserContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
