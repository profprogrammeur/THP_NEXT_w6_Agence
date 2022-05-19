import { createContext } from "react";

export const ThemeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});