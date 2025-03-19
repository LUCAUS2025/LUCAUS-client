import { createContext, useContext, useState, ReactNode } from 'react';

// Context 생성
interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Provider 생성
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>{children}</MenuContext.Provider>;
};

// Hook 생성 (더 간편하게 사용)
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
