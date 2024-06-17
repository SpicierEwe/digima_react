import React, { createContext, useContext, useState } from "react";

// Create a context with a default value
export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const { state, setState } = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
