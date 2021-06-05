import { ITheme } from "../../models";
import { fontFamily } from "../typography";
import { commonStyles } from "../common";

const baseTheme: Omit<ITheme, "fontTypes"> = {
  fontFamily: {
    primary: fontFamily.brandon,
    secondary: fontFamily.bitter,
    tertiary: fontFamily.fira,
  },
  color: {
    primary: "#2D2D2D",
    secondary: "#73777C",
    tertiary: "",
    border: "#E0E4E8",
    success: "#00A082",
    warning: "#FFD200",
    error: "#FF3200",
  },
  backgroundColor: {
    primary: "#E5E5E5",
    secondary: "#FFFFFF",
  },
  boxShadow:
    "0px 25px 20px rgba(172, 168, 129, 0.2), 0px 10px 20px rgba(197, 202, 209, 0.56)",
  common: commonStyles,
};

export { baseTheme };
