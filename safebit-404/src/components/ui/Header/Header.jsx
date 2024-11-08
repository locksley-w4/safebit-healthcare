import React, { useState } from "react";
import cl from "./Header.module.css";

const Header = () => {
  const [user, setUser] = useState({
    firstname: "Asadbek"
  });
  const currentDate = new Date();
  let todaysDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(currentDate)

  return (
    <header className={cl.header}>
      <div className={cl.logo}>
        <img
          src="https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg"
          alt="user logo"
        />
      </div>
      <div className={cl.headerText}>
        <p style={{fontSize: "1rem", margin: 0, fontWeight: 400}}>Hi, {user.firstname}</p>
        <p style={{fontSize: "1.2rem"}}>{todaysDate}</p>
      </div>
      <div className={cl.notiff + " fa fa-bell fa-2x"}/>
    </header>
  );
};

export default Header;
