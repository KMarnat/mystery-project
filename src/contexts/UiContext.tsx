import { createContext, useState, useContext } from 'react';

interface UiContextValue {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UiProviderProps {
  children: React.ReactNode;
}

const UiContext = createContext<UiContextValue>({ activeMenu: false, setActiveMenu: () => {} });

export const UiProvider: React.FC<UiProviderProps> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  return <UiContext.Provider value={{ activeMenu, setActiveMenu }}>{children}</UiContext.Provider>;
};

export const useUiContext = () => {
  return useContext(UiContext);
};
