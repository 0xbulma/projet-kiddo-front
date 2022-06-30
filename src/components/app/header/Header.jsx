import React, { Fragment } from "react";

import NavBar from "./navbar/NavBar";

const Header = (isAdmin) => {
  return (
    <Fragment>
      <div className="header">
        <NavBar isAdmin={isAdmin} />
      </div>
    </Fragment>
  );
};

export default Header;

// import { useNavigate } from "react-router";
  // const navigate = useNavigate();
  
/* 
  <button onClick={() => navigate("/register")}>S'incrire</button>
  <button onClick={() => navigate("/login")}> Se connecter</button>
*/