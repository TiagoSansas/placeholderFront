'use client';
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

interface ThemeContextProps {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const removeOldTheme = theme === false ? 'dark' : 'ligth';
    const addTheme = theme === false ? 'ligth' : 'dark';
    root.classList.remove(removeOldTheme);
    root.classList.add(addTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
