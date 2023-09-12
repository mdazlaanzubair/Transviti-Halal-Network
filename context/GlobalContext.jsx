"use client";

import { useState, createContext, useContext } from "react";

const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarActiveMenu, setSidebarActiveMenu] = useState("Home");
  const value = {
    isSidebarOpen,
    setIsSidebarOpen,
    sidebarActiveMenu,
    setSidebarActiveMenu,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
