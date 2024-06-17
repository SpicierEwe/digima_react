import React, { createContext, useState } from "react";

// Create a context with a default value
const ThemeContext = createContext(null);

const MyProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};
