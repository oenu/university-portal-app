import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { toggleTheme } from "./features/theme/themeSlice";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Landing from "./Pages/Landing/Landing";
import { RootState } from "./Redux/store";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

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
