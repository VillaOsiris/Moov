import React, { useContext } from "react";
import { ToggleContainer } from "../App";
import tmdbLogo from "../assets/tmdb.svg";
import "../styles/FooterStyles.css";

function Footer() {
  const { theme } = useContext(ToggleContainer);

  return (
    <div className={theme ? "lightmode footer" : "darkmode footer"}>
      <div className="nav-logo">
        <span>moov</span>
      </div>
      <div className="footer--text">
        <p>Project made for educational proposes only</p>
        <p>All rights and data are tributed to tmdb.org</p>
      </div>
      <div className="tmdblogo"></div>
    </div>
  );
}

export default Footer;
