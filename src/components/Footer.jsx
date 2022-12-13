import React, { useContext } from "react";
import { ToggleContainer } from "../App";
import "../styles/FooterStyle.css";

function Footer() {
  const { theme } = useContext(ToggleContainer);

  return (
    <div className={theme ? "lightmode footer" : "darkmode footer"}>Footer</div>
  );
}

export default Footer;
