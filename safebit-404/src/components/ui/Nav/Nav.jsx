import React from "react";
import { Link, NavLink } from "react-router-dom";
import cl from "./Nav.module.css";

const Nav = () => {

  return (
    <nav className={cl.nav}>
      <NavLink to="/" className={({isActive}) => isActive ? cl.active : ""}>
        <i className="fa fa-home fa-2x"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/favlist" className={({isActive}) => isActive ? cl.active : ""}>
        <i className="fa fa-heart fa-2x"></i>
        <span>FavList</span>
      </NavLink>
      <NavLink to="/recipes" className={({isActive}) => isActive ? cl.active : ""}>
        <i className="fa fa-book fa-2x"></i>
        <span>Recipes</span>
      </NavLink>
      <NavLink to="/profile" className={({isActive}) => isActive ? cl.active : ""}>
        <i className="fa fa-user fa-2x"></i>
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
