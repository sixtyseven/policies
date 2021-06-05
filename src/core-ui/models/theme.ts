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
    xxsmall: string;
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
  };
  breakPoint: {};
  nameZIndex: {};
}
