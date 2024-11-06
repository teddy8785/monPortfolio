import "../styles/header.css";
import { useLocation } from "react-router-dom";

function Header({ children }) {

const location = useLocation();
const isPageAccueil = location.pathname === "/Accueil";

const  accueilStyle = isPageAccueil ? {position:"sticky", top:"0", zIndex:"100"} : {};

  return (
    <header className="header" style={accueilStyle}>
      {children}
    </header>
  );
}

export default Header;
