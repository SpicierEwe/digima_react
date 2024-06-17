import React, { createContext, useState } from "react";

// Create a context with a default value
export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function persistDarkTheme(isDark) {}
  localStorage.setItem("isDarkTheme", JSON.stringify(isDark));

  function handleSetIsDarkTheme() {
    setIsDarkTheme(!isDarkTheme);
    if (document.documentElement.getAttribute("data-theme") === null) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, handleSetIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
