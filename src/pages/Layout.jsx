import Navigation from "components/AppBar/Navigation";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';


export default function Layout() {
  const [mode, setMode] = useState(() => {
    return JSON.parse(window.localStorage.getItem('theme')) ?? 'light';
  });

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(mode));
  }, [mode]);

  const toggleMode = () => {
    setMode(prevState => (prevState === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#108d90',
      },
      secondary: {
        main: '#448AFF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="layout">
        <Navigation toggleMode={toggleMode} currentMode={mode} />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
