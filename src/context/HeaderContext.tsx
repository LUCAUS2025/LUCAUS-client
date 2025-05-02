// src/context/HeaderContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface HeaderContextType {
  hideHeader: boolean;
  setHideHeader: (value: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType>({
  hideHeader: false,
  setHideHeader: () => {},
});

export const useHeader = () => useContext(HeaderContext);

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hideHeader, setHideHeader] = useState(false);

  return <HeaderContext.Provider value={{ hideHeader, setHideHeader }}>{children}</HeaderContext.Provider>;
};
