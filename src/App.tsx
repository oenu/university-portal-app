import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Landing from "./Pages/Landing/Landing";
import { themeActions } from "./Redux/Action-Creators";
import { State } from "./Redux/store";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: State) => state.theme);
  const { toggleTheme } = bindActionCreators(themeActions, dispatch);
  return (
    <ColorSchemeProvider
      colorScheme={theme.darkMode ? `dark` : `light`}
      toggleColorScheme={toggleTheme}
    >
      <MantineProvider
        theme={{
          // fontFamily: "Open Sans",
          colorScheme: theme.darkMode ? `dark` : `light`,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
