import { IThemeColor, IThemeFontFamily } from "../../models";
import { CSSObject } from "styled-components";

const fontTypesFactory = (fontFamily: IThemeFontFamily, color: IThemeColor) => {
  return {
    p1: {
      fontSize: `16px`,
      lineHeight: `24px`,
      fontFamily: fontFamily.primary,
      color: color.primary,
    },
    h2: {
      fontSize: `32px`,
      lineHeight: `40px`,
      fontFamily: fontFamily.primary,
      color: color.primary,
      fontWeight: 500,
    },
    h3: {
      fontSize: `28px`,
      lineHeight: `35px`,
      fontFamily: fontFamily.primary,
      color: color.primary,
      fontWeight: 500,
    },
    h4: {
      fontSize: `24px`,
      lineHeight: `30px`,
      fontFamily: fontFamily.primary,
      color: color.primary,
      fontWeight: 500,
    },
    h5: {
      fontSize: `20px`,
      lineHeight: `30px`,
      fontFamily: fontFamily.primary,
      color: color.primary,
      fontWeight: 500,
    },
    caption4: {
      fontSize: `14px`,
      lineHeight: `21px`,
      fontWeight: 400,
      fontFamily: fontFamily.secondary,
      color: color.secondary,
    },
    caption5: {
      fontSize: `12px`,
      lineHeight: `15px`,
      fontFamily: fontFamily.secondary,
      color: color.secondary,
    },
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
