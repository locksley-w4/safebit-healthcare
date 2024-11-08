import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  let [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    setIsAuth(localStorage.getItem("userId"));
    console.log(isAuth);
  }, []);
  return <div className="App">{isAuth ? <Login /> : <Signup />}</div>;
}

export default App;
