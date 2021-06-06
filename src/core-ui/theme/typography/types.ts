import { IThemeColor, IThemeFontFamily } from "../../models";
import { CSSObject } from "styled-components";

const fontTypesFactory = (fontFamily: IThemeFontFamily, color: IThemeColor) => {
  return {
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
    caption3: {
      fontSize: `14px`,
      lineHeight: `21px`,
      fontWeight: 400,
      fontFamily: fontFamily.secondary,
      color: color.secondary,
    } as CSSObject,
    caption4: {
      // fontSize: `20px`,
      // lineHeight: `30px`,
      // textTransform: `uppercase`,
      // fontFamily: fontFamily.primary,
      // color: color.primary,
    } as CSSObject,
  };
};

export { fontTypesFactory };
