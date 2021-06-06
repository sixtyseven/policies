export type IThemeMode = "light" | "dark" | "pink";
import { CSSObject } from "styled-components";

export interface IFontTypes {
  p1: CSSObject;
  h2: CSSObject;
  h3: CSSObject;
  h4: CSSObject;
  h5: CSSObject;
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
  mediaQuery: {
    sm: string;
    lg: string;
  };
  namedZIndex: {};
}
