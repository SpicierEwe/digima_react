import React, { createContext, useState } from "react";

// Create a context with a default value
export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleSetisDarkTheme() {
    setIsDarkTheme(!isDarkTheme);
    if (document.documentElement.getAttribute("data-theme") === null) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, handleSetisDark: handleSetisDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
