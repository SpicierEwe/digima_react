import React, { createContext, useState } from "react";

// Create a context with a default value
const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};
