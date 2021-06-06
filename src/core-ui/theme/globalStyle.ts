import { createGlobalStyle, ThemeProps } from "styled-components";
import { ITheme } from "../models";
import { fontFamily } from "./typography";

const GlobalStyle = createGlobalStyle((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return `
    body {
      /* primary font */
      font-family: ${theme.fontFamily.primary};
      background-color: ${theme.backgroundColor.primary};
      padding: 16px;
    }

    .tk-brandon-grotesque {
      font-family: ${fontFamily.brandon} !important;
    }

    .tk-bitter {
      font-family: ${fontFamily.bitter} !important;
    }

    .tk-fira-mono {
      font-family: ${fontFamily.fira} !important;
    }

    .divider {
      border-bottom: 1px solid ${theme.color.border};
      width: 100%;
    }

`;
});

export { GlobalStyle };
