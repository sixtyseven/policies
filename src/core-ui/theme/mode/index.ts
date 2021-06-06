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
  const isIE11 = Boolean(window.MSInputMethodContext) && Boolean((document as any).documentMode);
  console.log("isIE11 ", isIE11);
  return {
    ...theme,
    fontTypes,
    common: {
      ...theme.common,
      isIE11
    }
  };
};

export { createTheme };
