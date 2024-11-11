import React from "react";
import Header from "../components/ui/Header/Header";
import Nav from "../components/ui/Nav/Nav";
import { Outlet } from "react-router-dom";

// localStorage.setItem(`user`, JSON.stringify({
//   name: "qweret",
//   surname: "YTREWQ",
//   age: 18,
//   gender: "male",
//   dailyIntake: 1230,
//   email: "WERTYu@gmadf.com",
//   weight: 67,
//   height: 185,
//   username: "locksley1234",
//   goals: ["lose-weight", "gain-mass"],
//   diseases: ["diabetes", "tonzilit"]
// }));

const Main = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Nav />
    </main>
  );
};

export default Main;
