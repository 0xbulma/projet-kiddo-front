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
      </div>
    </>
  );
};

export default Header;
