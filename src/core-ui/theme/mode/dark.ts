import { ITheme } from "../../models";
import { fontFamily } from "../typography";
import { defaultTheme } from "./default";

const darkTheme: ITheme = {
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
  boxShadow: "",
};

export { darkTheme };
