import { IThemeColor, IThemeFontFamily } from "../../models";
import { CSSObject } from "styled-components";

const fontTypesFactory = (fontFamily: IThemeFontFamily, color: IThemeColor) => {
  return {
    h3: {
      fontSize: `20px`,
      lineHeight: `30px`,
      textTransform: `uppercase`,
      fontFamily: fontFamily.primary,
      color: color.primary,
    } as CSSObject,
    h4: {
      fontSize: `20px`,
      lineHeight: `30px`,
      textTransform: `uppercase`,
      fontFamily: fontFamily.primary,
      color: color.primary,
    } as CSSObject,
    cation3: {
      fontSize: `20px`,
      lineHeight: `30px`,
      textTransform: `uppercase`,
      fontFamily: fontFamily.primary,
      color: color.primary,
    } as CSSObject,
    cation4: {
      fontSize: `20px`,
      lineHeight: `30px`,
      textTransform: `uppercase`,
      fontFamily: fontFamily.primary,
      color: color.primary,
    } as CSSObject,
  };
};

export { fontTypesFactory };
