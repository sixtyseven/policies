import { ITheme } from "../../models";
import { fontFamily } from "../typography";
import { baseTheme } from "./base";

const darkTheme: Omit<ITheme, "fontTypes"> = {
  ...baseTheme,
  fontFamily: {
    ...baseTheme.fontFamily,
    primary: `'Times New Roman', serif`,
  },
  color: {
    ...baseTheme.color,
    primary: "#E5E5E5",
    secondary: "#FFFFFF",
    success: "purple",
  },
  backgroundColor: {
    ...baseTheme.backgroundColor,
    primary: "#2D2D2D",
    secondary: "#73777C",
  },
};

export { darkTheme };
