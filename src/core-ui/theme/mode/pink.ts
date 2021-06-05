import { ITheme } from "../../models";
import { fontFamily } from "../typography";
import { baseTheme } from "./base";

const pinkTheme: Omit<ITheme, "fontTypes"> = {
  ...baseTheme,
  fontFamily: {
    ...baseTheme.fontFamily,
    // todo overwrite
  },
  color: {
    ...baseTheme.color,
    // todo overwrite
  },
  backgroundColor: {
    ...baseTheme.backgroundColor,
    // todo overwrite
  },
  boxShadow: "",
};

export { pinkTheme };
