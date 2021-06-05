import { ITheme } from "../../models";
import { fontFamily } from "../typography";
import { defaultTheme } from "./default";

const darkTheme: ITheme = {
  ...defaultTheme,
  fontFamily: {
    ...defaultTheme.fontFamily,
    // todo overwrite
  },
  color: {
    ...defaultTheme.color,
    // todo overwrite
  },
  backgroundColor: {
    ...defaultTheme.backgroundColor,
    // todo overwrite
  },
};

export { darkTheme };
