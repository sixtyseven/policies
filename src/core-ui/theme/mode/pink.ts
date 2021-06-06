import { ITheme } from "../../models";
import { fontFamily } from "../typography";
import { baseTheme } from "./base";

const pinkTheme: Omit<ITheme, "fontTypes"> = {
  ...baseTheme,
  fontFamily: {
    ...baseTheme.fontFamily,
    primary: `'Brush Script MT', cursive`,
  },
  color: {
    ...baseTheme.color,
    border: "#FFB6C1",
    // todo overwrite
  },
  backgroundColor: {
    ...baseTheme.backgroundColor,
    primary: "pink",
  },
  boxShadow:
    "0px 25px 20px rgba(199, 21, 133, 0.2), 0px 10px 20px rgba(199, 21, 133, 0.56)",
};

export { pinkTheme };
