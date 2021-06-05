export type IThemeMode = "light" | "dark" | "pink";

export interface ITheme {
  fontFamily: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
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
  breakPoint: {};
  nameZIndex: {};
}
