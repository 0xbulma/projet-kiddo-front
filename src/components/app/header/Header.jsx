import Logo from "./navbar/Logo";
import Nav from "./navbar/Nav";
import NavIcon from "./navbar/NavIcon";

import { navigationHeader } from "../../../constants/navigation";

const titleProp = navigationHeader.titleProp;
const navigation = navigationHeader.navigation;
const navIcon = navigationHeader.navIcon;

export default function Header () {
  return (
    <div className="header">
      <nav aria-label="top" className="header__navbar">
        <div className="">
          <div className="">
            <Logo titleProp={titleProp} />
            <Nav navigation={navigation} />
            <NavIcon navIcon={navIcon} />
          </div>
        </div>
      </nav>
    </div>
  );
};

// import { useNavigate } from "react-router";
  // const navigate = useNavigate();
  
/* 
  <button onClick={() => navigate("/register")}>S'incrire</button>
  <button onClick={() => navigate("/login")}> Se connecter</button>
*/