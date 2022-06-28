import React from "react";
// hooks
import { useNavigate } from "react-router";
import { navigation } from "../../../../constants/navBar";
// comp
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";

const home = navigation.pages[0];

export default function NavBar({ isAdmin }) {
  const navigate = useNavigate();

  return (
    <nav aria-label="top" className="Navbar">
      <div className="NavbarDiv">
        <div className="NavbarFlex">
          <Logo home={home} className="-ml-28" />
          <Nav navigation={navigation} isAdmin={isAdmin} />
          <div className="lastChild">
            {/* <Search /> */}
            {/* <Profile /> */}
            {isAdmin && (
              <button onClick={() => navigate("/BackOffice")}>
                BackOffice
              </button>
            )}
          </div>
        </div>
        <button
          onClick={() => {
            navigate("register");
          }}
        >
          S'inscrire
        </button>
        <button
          onClick={() => {
            navigate("login");
          }}
        >
          Se connecter
        </button>
      </div>
    </nav>
  );
}
