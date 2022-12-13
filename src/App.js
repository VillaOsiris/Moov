import React, { useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export const ToggleContainer = React.createContext();

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ToggleContainer.Provider value={{ theme, setTheme }}>
      <>
        <NavBar />
        <Main />
        <Footer />
      </>
    </ToggleContainer.Provider>
  );
}

export default App;
