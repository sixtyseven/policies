import { IThemeColor, IThemeFontFamily } from "../../models";
import { CSSObject } from "styled-components";

const fontTypesFactory = (fontFamily: IThemeFontFamily, color: IThemeColor) => {
  return {
    p1: {
      fontSize: `16px`,
      lineHeight: `24px`,
      fontFamily: fontFamily.primary,
      color: color.primary,
    } as CSSObject,
    h3: {
      // fontSize: `20px`,
      // lineHeight: `30px`,
      // textTransform: `uppercase`,
      // fontFamily: fontFamily.primary,
      // color: color.primary,
    } as CSSObject,
    h4: {
      fontSize: `20px`,
      lineHeight: `30px`,
      textTransform: `uppercase`,
      fontFamily: fontFamily.primary,
      color: color.primary,
    } as CSSObject,
    caption4: {
      fontSize: `14px`,
      lineHeight: `21px`,
      fontWeight: 400,
      fontFamily: fontFamily.secondary,
      color: color.secondary,
    } as CSSObject,
    caption5: {
      fontSize: `12px`,
      lineHeight: `15px`,
      fontFamily: fontFamily.secondary,
      color: color.secondary,
    } as CSSObject,
    state4: {
      fontSize: `14px`,
      lineHeight: `24px`,
      textTransform: `uppercase`,
      fontFamily: fontFamily.primary,
      color: color.primary,
    } as CSSObject,
  };
};

export { fontTypesFactory };
