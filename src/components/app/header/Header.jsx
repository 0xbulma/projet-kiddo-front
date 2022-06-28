import React from "react";
import { useNavigate } from "react-router";

import NavBar from "./navbar/NavBar";

const Header = (isAdmin) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <NavBar isAdmin={isAdmin} />
        <button onClick={() => navigate("/register")}>S'incrire</button>
        <button onClick={() => navigate("/login")}> Se connecter</button>
        <a href='/administration'>Allez sur la page Admin</a>
      </div>
    </>
  );
};

export default Header;
