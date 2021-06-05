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
}
