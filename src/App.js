import "./App.css";
import { useState } from "react";
import Service from "./components/Service";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { contextMain } from "./components/Context";

function App() {
  const [isDark, setIsDark] = useState(false);

  const darkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <contextMain.Provider value={{ isDark, darkMode }}>
          <p>I have change theme to {isDark ? "Dark" : "Light"}</p>
          <div className={isDark ? "dark" : ""}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />
            </Routes>
          </div>
        </contextMain.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
