import React from "react";
import Header from "../components/ui/Header/Header";
import Nav from "../components/ui/Nav/Nav";
import { Outlet } from "react-router-dom";

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
