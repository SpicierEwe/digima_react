import React, { createContext, useState, useEffect } from "react";

// Create a context with a default value
export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const storageKey = "isDarkTheme";
  const [isDarkTheme, setIsDarkTheme] = useState(getIsDarkTheme);

  function getIsDarkTheme() {
    const isDarkTheme = JSON.parse(localStorage.getItem(storageKey));
    return isDarkTheme !== null ? isDarkTheme : false;
  }

  function persistDarkTheme(isDark) {
    localStorage.setItem(storageKey, JSON.stringify(isDark));
  }

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkTheme]);

  function handleSetIsDarkTheme() {
    const newIsDarkTheme = !isDarkTheme;
    setIsDarkTheme(newIsDarkTheme);
    persistDarkTheme(newIsDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, handleSetIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
