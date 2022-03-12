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
import Navbar from "./components/shared/Navbar";
import InvoicesIndex from "./components/invoice/InvoicesIndex";
import Invoice from "./components/invoice/Invoice";
import NewInvoice from "./components/invoice/NewInvoice";

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
              <Route path="/invoices/:id" element={<Invoice />} />
              <Route path="/invoices/new" element={<NewInvoice />} />
              <Route path="/invoices" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
