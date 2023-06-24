'use client'

import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [priceList, setPriceList] = useState(null);

  return (
    <AppContext.Provider value = {{ priceList, setPriceList }}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext);