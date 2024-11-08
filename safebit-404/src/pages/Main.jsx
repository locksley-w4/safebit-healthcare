import React from "react";
import Header from "../components/ui/Header/Header";
import Dashboard from "../components/Dashboard/Dashboard";
// import RecipeTabs from "./components/RecipeTabs";
// import RecipeList from "./components/RecipeList";
// import TrendingRecipes from "./components/TrendingRecipes";
// import BottomNavigation from "./components/BottomNavigation";
// import styled from "styled-components";

const Main = () => {
  return (
    <main style={{fontFamily: "sans-serif"}}>
      <Header />
      <Dashboard/>
    </main>
  );
};

export default Main;
