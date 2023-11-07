import React from "react";
import { IThemeContext } from "./types";
import theme from "../../themes/blue";

export const ThemeContext = React.createContext<IThemeContext>({
  theme: null,
  changeTheme: () => null,
});
