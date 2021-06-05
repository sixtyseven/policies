import * as React from "react";
import { themeMap } from "./mode";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { IReactChildren, ITheme, IThemeMode } from "../models";
import { GlobalStyle } from "./globalStyle";
import "./typography/fontface.css";

interface IProps {
  mode: IThemeMode;
  children: IReactChildren;
}

const ThemeProvider = (props: IProps) => {
  const { mode, children } = props;
  const themeDSL: ITheme = themeMap[mode];
  return (
    <StyledThemeProvider theme={themeDSL}>
      {children}
      <GlobalStyle theme={themeDSL} />
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
