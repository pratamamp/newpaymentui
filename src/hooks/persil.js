import React, { createContext, useContext, useState } from "react";

const PersilSelectContext = createContext({
  list: [],
  updateList: () => {},
});

function PersilProvider({ children }) {
  const [list, updateList] = useState([]);
  const value = { list, updateList };

  return (
    <PersilSelectContext.Provider value={value}>
      {children}
    </PersilSelectContext.Provider>
  );
}

function usePersilSelect() {
  return useContext(PersilSelectContext);
}

export { PersilProvider, usePersilSelect };
