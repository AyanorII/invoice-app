// Dependencies
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Components
import GlobalStyle from "./stylesheets/GlobalStyle";
import { lightTheme, darkTheme } from "./stylesheets/theme";
import Navbar from "./components/Navbar";
import InvoicesIndex from "./components/InvoicesIndex";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <div className="App">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Router>
            <Routes>
              <Route path="/" element={<InvoicesIndex />} />
            </Routes>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
