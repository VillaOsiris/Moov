import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
export const ToggleContainer = React.createContext();

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ToggleContainer.Provider value={{ theme, setTheme }}>
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </ToggleContainer.Provider>
  );
}

export default App;
