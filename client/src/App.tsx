import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppContextProvider } from "./context/AppContext";
import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles } from "./styles/typography";
import { THEME } from "./styles/theme";


const App: React.FC = () => {
  return (
    <Router>
      <AppContextProvider>
      <Global styles={globalStyles} />
        <ThemeProvider theme={THEME}>
          <AppRoutes />
        </ThemeProvider>
      </AppContextProvider>
    </Router>
  );
};

export default App;
