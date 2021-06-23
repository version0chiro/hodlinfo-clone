import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./components/navigation/Navigation";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Navigation setDarkMode={setDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default App;
