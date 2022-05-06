import React, { createContext, useState, useEffect } from "react";
const AppContext = createContext();

export function AppGlobalState({ children }) {
  const [state, setState] = useState({ loading: true });

  useEffect(function () {
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?limit=30&ts=0faE4&apikey=5538f0b6e1c38cc40dc93eaa8d1c5bd6&hash=643de5ac439f46275d14b14e07141625"
    )
      .then((data) => data.json())
      .then((res) => {
        setState({ loading: false, data: res.data.results });
      });
  }, []);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export default AppContext;
