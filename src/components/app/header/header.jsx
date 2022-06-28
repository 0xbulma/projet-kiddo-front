import React from "react";

import NavBar from "./navBar/NavBar";

export default function header(isAdmin) {
  return (
    <div className="header">
      <NavBar isAdmin={isAdmin} />
    </div>
  );
}
