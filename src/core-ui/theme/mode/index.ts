import { lightTheme } from "./light";
import { darkTheme } from "./dark";
import { pinkTheme } from "./pink";
import { IThemeMode, ITheme } from "../../models";
import { fontTypesFactory } from "../typography";

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
  pink: pinkTheme,
};

const createTheme = (mode: IThemeMode): ITheme => {
  const theme = themeMap[mode];
  const fontTypes = fontTypesFactory(theme.fontFamily, theme.color);
  return {
    ...theme,
    fontTypes,
  };
};

export { createTheme };
