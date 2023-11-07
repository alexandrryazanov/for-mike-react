import { ITheme } from "../../themes/types";

export interface IThemeContext {
  theme: ITheme | null;
  changeTheme: (title: string) => void;
}
