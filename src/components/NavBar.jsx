import React, { useContext } from "react";
import { ToggleContainer } from "../App";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../styles/NavBarStyles.css";

function NavBar() {
  const { theme, setTheme } = useContext(ToggleContainer);

  return (
    <>
      <nav className={theme ? "lightmode" : "darkmode"}>
        <div className="nav-logo">
          <span>moov</span>
        </div>
        <div className="end">
          <div
            className={
              theme ? "lightmode toggle-container" : "darkmode toggle-container"
            }
            onClick={() => setTheme(!theme)}
          >
            <div
              className={
                theme ? "lightmode toggle-switcher" : "darkmode toggle-switcher"
              }
            >
              {theme ? <MdDarkMode /> : <MdLightMode />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
