import { ITheme } from "../../models";
import { fontFamily } from "../typography";

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
};

export { defaultTheme };
