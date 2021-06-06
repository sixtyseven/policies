export type IThemeMode = "light" | "dark" | "pink";
import { CSSObject } from "styled-components";

export interface IFontTypes {
  h3: CSSObject;
  h4: CSSObject;
  p1: CSSObject;
  caption4: CSSObject;
  caption5: CSSObject;
  state4: CSSObject;
}

export interface IThemeFontFamily {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface IThemeColor {
  primary: string;
  secondary: string;
  tertiary: string;
  border: string;
  success: string;
  warning: string;
  error: string;
}

export interface ITheme {
  fontTypes: IFontTypes;
  fontFamily: IThemeFontFamily;
  color: IThemeColor;
  backgroundColor: {
    primary: string;
    secondary: string;
  };
  boxShadow: string;
  common: ICommonStyles;
}

export interface ICommonStyles {
  spacing: {
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    xxxlarge: number;
  };
  bootstrapBreakPoint: {
    // xs  is default
    sm: "576px"; // 576px and up
    md: "768px";
    lg: "992px";
    xl: "1200px";
  };
  namedZIndex: {};
}
