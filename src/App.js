import { useState } from "react";
import "./App.css";

import DarkModeToggle from "./components/navigation/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default App;
