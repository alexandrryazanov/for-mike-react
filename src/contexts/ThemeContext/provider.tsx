import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { ITheme } from "../../themes/types";
import { ThemeContext } from "./index";
import themes from "../../themes";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ITheme | null>(null);

  useEffect(() => {
    const localStorageThemeName = localStorage.getItem("theme");
    if (!localStorageThemeName) return;

    changeTheme(localStorageThemeName);
  }, []);

  const changeTheme = useCallback((title: string) => {
    const foundTheme = themes.find((t) => t.title === title);
    if (!foundTheme) return;

    localStorage.setItem("theme", title);
    setTheme(foundTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
