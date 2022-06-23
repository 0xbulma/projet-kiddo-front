import React from "react";

import Navbar from "./Navbar/Navbar";

import { useNavigate } from "react-router-dom";

export default function Header({ isAdmin }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Navbar navigate={navigate} isAdmin={isAdmin} />
    </div>
  );
}
