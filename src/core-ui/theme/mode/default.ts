import { ITheme } from "../../models";
import { fontFamily } from "../typography";
import { commonStyles } from "../common";

const defaultTheme: ITheme = {
  fontFamily: {
    primary: fontFamily.brandon,
    secondary: fontFamily.bitter,
    tertiary: fontFamily.fira,
  },
  color: {
    primary: "#2D2D2D",
    secondary: "",
    tertiary: "",
    border: "",
  },
  backgroundColor: {
    primary: "#E5E5E5",
    secondary: "#FFFFFF",
  },
  boxShadow: "",
  common: commonStyles,
};

export { defaultTheme };
